const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Resend } = require('resend');
const User = require('../models/User.cjs');

const router = express.Router();

// Initialise Resend once at module load — key is already loaded by api/index.cjs
const resend = new Resend(process.env.RESEND_API_KEY);

// FROM address:
// - If you have a verified domain in Resend, replace this with e.g. "EduAi Reports <noreply@yourdomain.com>"
// - For local testing with the free Resend sandbox (no custom domain), the only
//   allowed "to" address is the email you registered with on resend.com.
//   Set RESEND_TEST_TO in your .env to override the recipient for local testing.
const FROM_ADDRESS = process.env.RESEND_FROM || 'EduAi Reports <onboarding@resend.dev>';

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendVerificationEmail(toEmail, verificationCode, subject = 'Your Verification Code', isResend = false) {
  const recipient = toEmail; // always send to the address given at registration

  const html = isResend
    ? `
      <div style="font-family:'Inter',Arial,sans-serif;max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
        <div style="background:#0f172a;padding:28px 32px">
          <span style="color:#ffffff;font-size:20px;font-weight:700">EduAi Reports</span>
        </div>
        <div style="padding:32px">
          <h2 style="color:#0f172a;font-size:22px;font-weight:700;margin:0 0 8px">New verification code</h2>
          <p style="color:#64748b;font-size:15px;margin:0 0 28px">Here is your new code. It expires in 15 minutes.</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;text-align:center;margin-bottom:28px">
            <div style="font-size:40px;font-weight:800;letter-spacing:12px;color:#0f172a;font-family:monospace">${verificationCode}</div>
          </div>
        </div>
      </div>
    `
    : `
      <div style="font-family:'Inter',Arial,sans-serif;max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
        <div style="background:#0f172a;padding:28px 32px;display:flex;align-items:center;gap:12px">
          <div style="width:36px;height:36px;background:#6366f1;border-radius:50%;display:inline-flex;align-items:center;justify-content:center"></div>
          <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.5px">EduAi Reports</span>
        </div>
        <div style="padding:32px">
          <h2 style="color:#0f172a;font-size:22px;font-weight:700;margin:0 0 8px">Verify your email address</h2>
          <p style="color:#64748b;font-size:15px;margin:0 0 28px">Enter the code below in the app to complete your sign up. It expires in 15 minutes.</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;text-align:center;margin-bottom:28px">
            <div style="font-size:40px;font-weight:800;letter-spacing:12px;color:#0f172a;font-family:monospace">${verificationCode}</div>
          </div>
          <p style="color:#94a3b8;font-size:13px;margin:0">If you didn't create an account, you can safely ignore this email.</p>
        </div>
      </div>
    `;

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: recipient,
      subject: `EduAi Reports – ${subject}`,
      html,
    });

    if (result.error) {
      throw new Error(result.error.message || JSON.stringify(result.error));
    }

    console.log(`✅ Email sent to ${recipient} (id: ${result.data?.id})`);
    return true;
  } catch (err) {
    console.error('❌ Resend failed:', err.message || err);
    // Always log the code to the console so local testing is never blocked
    console.log(`\n📋 VERIFICATION CODE FOR ${toEmail}: ${verificationCode}\n`);
    return false;
  }
}

// ── REGISTER ─────────────────────────────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { displayName, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = generateCode();

    user = new User({
      displayName,
      email,
      password: hashedPassword,
      verificationCode,
      verificationCodeExpires: new Date(Date.now() + 15 * 60 * 1000),
    });

    await user.save();

    await sendVerificationEmail(email, verificationCode, 'Your Verification Code', false);

    res.status(201).json({
      message: 'Registration successful. Please check your email for the verification code.',
      email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// ── VERIFY ────────────────────────────────────────────────────────────────────
router.post('/verify', async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found.' });
    if (user.isEmailVerified) return res.status(400).json({ error: 'Email already verified.' });

    if (user.verificationCode !== code || user.verificationCodeExpires < new Date()) {
      return res.status(400).json({ error: 'Invalid or expired verification code.' });
    }

    user.isEmailVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpires = undefined;
    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Email verified successfully.',
      token,
      user: { displayName: user.displayName, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during verification.' });
  }
});

// ── RESEND CODE ───────────────────────────────────────────────────────────────
router.post('/resend', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: 'User not found.' });
    if (user.isEmailVerified) return res.status(400).json({ error: 'Email already verified.' });

    const verificationCode = generateCode();
    user.verificationCode = verificationCode;
    user.verificationCodeExpires = new Date(Date.now() + 15 * 60 * 1000);
    await user.save();

    await sendVerificationEmail(email, verificationCode, 'New Verification Code', true);

    res.json({ message: 'Verification code resent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
});

// ── LOGIN ─────────────────────────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials.' });

    if (!user.isEmailVerified) {
      return res.status(403).json({
        error: 'Please verify your email first.',
        needsVerification: true,
        email: user.email,
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    );

    res.json({ token, user: { displayName: user.displayName, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

module.exports = router;
