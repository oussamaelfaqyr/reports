const express = require('express');

const router = express.Router();

router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!process.env.OPENROUTER_API_KEY) {
        return res.status(500).json({ error: 'OpenRouter API key not configured on server.' });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'ReportForge'
        },
        body: JSON.stringify({
            model: 'google/gemini-2.5-flash',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 2048
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenRouter Error response:', errorText);
        return res.status(response.status).json({ error: `OpenRouter API Error: ${response.status} ${response.statusText}` });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || '';
    res.json({ result });
  } catch (error) {
    console.error('OpenRouter Error:', error);
    res.status(500).json({ error: 'Failed to generate content.' });
  }
});

module.exports = router;
