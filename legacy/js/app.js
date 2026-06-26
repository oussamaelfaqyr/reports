// ReportForge Application Coordinator — Auth, Routing, Dashboard, AI Generator, Settings

// ── View Router ───────────────────────────────────────────────────────────────
ReportForge.switchView = function(view) {
    document.querySelectorAll('[id^="view-"]').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('fade-in');
    });
    const target = document.getElementById(`view-${view}`);
    if (target) {
        target.classList.remove('hidden');
        requestAnimationFrame(() => target.classList.add('fade-in'));
    }
    window.scrollTo(0, 0);
};

// ── Toast Notifications ───────────────────────────────────────────────────────
ReportForge.showToast = function(message, type = 'success') {
    const container = document.getElementById('toastContainer') || (() => {
        const c = document.createElement('div');
        c.id = 'toastContainer';
        c.className = 'toast-container';
        document.body.appendChild(c);
        return c;
    })();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✓', error: '✕', warn: '⚠' };
    toast.innerHTML = `<span class="toast-icon">${icons[type] || '•'}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
};

// ── Auth Functions ────────────────────────────────────────────────────────────
ReportForge.showAuthError = function(msg) {
    const el = document.getElementById('authError');
    if (el) { el.textContent = msg; el.classList.remove('hidden'); }
};
ReportForge.clearAuthError = function() {
    const el = document.getElementById('authError');
    if (el) { el.textContent = ''; el.classList.add('hidden'); }
};

ReportForge.handleLogin = function() {
    ReportForge.clearAuthError();
    const username = document.getElementById('loginUsername')?.value || '';
    const password = document.getElementById('loginPassword')?.value || '';
    const result = ReportForge.DB.login(username, password);
    if (result.success) {
        ReportForge.onLoginSuccess();
    } else {
        ReportForge.showAuthError(result.message);
    }
};

ReportForge.handleRegister = function() {
    ReportForge.clearAuthError();
    const displayName = document.getElementById('registerName')?.value || '';
    const username = document.getElementById('registerUsername')?.value || '';
    const password = document.getElementById('registerPassword')?.value || '';
    const confirm = document.getElementById('registerConfirm')?.value || '';
    if (password !== confirm) { ReportForge.showAuthError('Passwords do not match.'); return; }
    const result = ReportForge.DB.register(username, password, displayName);
    if (result.success) {
        const loginResult = ReportForge.DB.login(username, password);
        if (loginResult.success) ReportForge.onLoginSuccess();
    } else {
        ReportForge.showAuthError(result.message);
    }
};

ReportForge.onLoginSuccess = function() {
    const user = ReportForge.DB.getCurrentUser();
    ReportForge.renderDashboard(user);
    ReportForge.switchView('dashboard');
};

ReportForge.handleLogout = function() {
    ReportForge.DB.logout();
    // Clear backend auth session so React auth page shows
    localStorage.removeItem('rf_token');
    localStorage.removeItem('rf_user');
    window.location.href = '/';
};

// ── Dashboard ─────────────────────────────────────────────────────────────────
ReportForge.renderDashboard = function(user) {
    if (!user) return;

    // User info
    const nameEls = document.querySelectorAll('.user-display-name');
    nameEls.forEach(el => el.textContent = user.displayName || user.username);
    const avatarEls = document.querySelectorAll('.user-avatar-letter');
    avatarEls.forEach(el => el.textContent = (user.displayName || user.username).charAt(0).toUpperCase());

    const reports = ReportForge.DB.getReports();
    
    // Update report count elements
    const countEl = document.getElementById('reportCount');
    if (countEl) countEl.textContent = reports.length;
    const statCountEl = document.getElementById('statReportCount');
    if (statCountEl) statCountEl.textContent = reports.length;

    // Update last saved timestamp stat card
    const lastUpdatedEl = document.getElementById('statLastUpdated');
    if (lastUpdatedEl) {
        if (reports.length > 0) {
            // Sort by ID to get the newest report
            const sorted = [...reports].sort((a, b) => (b.id || 0) - (a.id || 0));
            lastUpdatedEl.textContent = sorted[0].updatedAt || 'Recently';
        } else {
            lastUpdatedEl.textContent = 'No reports';
        }
    }

    // Render saved reports
    ReportForge.renderSavedReports();
};

ReportForge.renderSavedReports = function() {
    const container = document.getElementById('savedReportsGrid');
    if (!container) return;

    const reports = ReportForge.DB.getReports();
    if (reports.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="file-minus" class="w-8 h-8 text-slate-500"></i></div>
                <p class="text-sm font-medium text-slate-400">No reports yet. Create your first one!</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    container.innerHTML = reports.map(report => {
        const template = ReportForge.templates[report.templateKey] || ReportForge.templates.blank;
        const accentColor = report.accent || template.accent || '#4f46e5';
        return `
            <div class="report-card" data-id="${report.id}">
                <div class="report-card-preview" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}05); border-bottom: 3px solid ${accentColor}">
                    <div class="report-card-preview-title" style="color: ${accentColor}">${report.title || 'Untitled'}</div>
                    <div class="report-card-preview-tag" style="background:${accentColor}18;color:${accentColor}">${template.tag || 'Report'}</div>
                </div>
                <div class="report-card-body">
                    <div class="report-card-title">${report.title || 'Untitled Report'}</div>
                    <div class="report-card-meta">${report.sections?.length || 0} sections · Updated ${report.updatedAt || 'recently'}</div>
                    <div class="report-card-actions">
                        <button class="btn-outline-sm" onclick="ReportForge.openReport('${report.id}')"><i data-lucide="edit-3" class="w-3.5 h-3.5" style="color:#a5b4fc"></i> Edit</button>
                        <button class="btn-outline-sm" onclick="ReportForge.duplicateReport('${report.id}')"><i data-lucide="copy" class="w-3.5 h-3.5" style="color:#86efac"></i> Duplicate</button>
                        <button class="btn-outline-sm danger" onclick="ReportForge.confirmDeleteReport('${report.id}')"><i data-lucide="trash-2" class="w-3.5 h-3.5" style="color:#fca5a5"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    if (window.lucide) lucide.createIcons();
};

ReportForge.openReport = function(reportId) {
    const report = ReportForge.DB.getReportById(reportId);
    if (!report) return;
    ReportForge.state = { ...ReportForge.defaultState(), ...report };
    ReportForge.renderBuilder();
    ReportForge.renderReport();
    ReportForge.switchView('builder');
};

ReportForge.duplicateReport = function(reportId) {
    const dup = ReportForge.DB.duplicateReport(reportId);
    if (dup) {
        ReportForge.renderSavedReports();
        ReportForge.showToast('Report duplicated!', 'success');
    }
};

ReportForge.confirmDeleteReport = function(reportId) {
    const report = ReportForge.DB.getReportById(reportId);
    if (!report) return;
    const modal = document.getElementById('confirmDeleteModal');
    const msgEl = document.getElementById('confirmDeleteMsg');
    if (msgEl) msgEl.textContent = `Delete "${report.title}"? This cannot be undone.`;
    if (modal) {
        modal.classList.remove('hidden');
        modal.dataset.targetId = reportId;
    }
};

ReportForge.executeDeleteReport = function() {
    const modal = document.getElementById('confirmDeleteModal');
    if (!modal) return;
    const id = modal.dataset.targetId;
    if (id) {
        ReportForge.DB.deleteReport(id);
        ReportForge.renderSavedReports();
        ReportForge.showToast('Report deleted.', 'warn');
    }
    modal.classList.add('hidden');
};

// ── AI Full Report Generator (Dashboard) ─────────────────────────────────────
ReportForge.runAIReportGenerator = async function() {
    const topicInput = document.getElementById('aiGeneratorTopic');
    const sectionCountInput = document.getElementById('aiGeneratorSections');
    const btn = document.getElementById('aiGeneratorBtn');
    const progressEl = document.getElementById('aiGeneratorProgress');

    const topic = topicInput?.value?.trim();
    if (!topic) { ReportForge.showToast('Please describe your report topic.', 'warn'); return; }

    const numSections = parseInt(sectionCountInput?.value) || 4;

    try {
        btn.disabled = true;
        btn.innerHTML = '<span class="animate-pulse">✦ Generating your report...</span>';
        if (progressEl) { progressEl.textContent = 'AI is crafting your report content. This may take a few seconds...'; progressEl.classList.remove('hidden'); }

        const data = await ReportForge.AI.generateFullReport(topic, numSections);

        // Build state from AI response
        const user = ReportForge.DB.getCurrentUser();
        ReportForge.state = {
            ...ReportForge.defaultState(),
            title: data.title || topic,
            subtitle: data.subtitle || '',
            author: data.author || (user ? user.displayName : ''),
            role: data.role || (user ? '' : ''),
            sections: (data.sections || []).map((s, i) => ({ id: Date.now() + i, title: s.title, content: s.content })),
            accent: '#4f46e5',
            templateKey: 'blank'
        };

        ReportForge.renderBuilder();
        ReportForge.renderReport();
        ReportForge.switchView('builder');
        ReportForge.showToast('Your AI report is ready!', 'success');

        if (topicInput) topicInput.value = '';
    } catch (err) {
        console.error(err);
        ReportForge.showToast('Generation failed: ' + err.message, 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i data-lucide="sparkles" class="w-4 h-4"></i> Generate with AI';
        if (progressEl) progressEl.classList.add('hidden');
        if (window.lucide) lucide.createIcons();
    }
};



// ── Auth Tab Toggle ───────────────────────────────────────────────────────────
ReportForge.switchAuthTab = function(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    if (loginForm) loginForm.classList.toggle('hidden', tab !== 'login');
    if (registerForm) registerForm.classList.toggle('hidden', tab !== 'register');
    ReportForge.clearAuthError();
};

// ── Builder New Blank ─────────────────────────────────────────────────────────
ReportForge.newBlankReport = function() {
    const user = ReportForge.DB.getCurrentUser();
    ReportForge.state = {
        ...ReportForge.defaultState(),
        author: user ? user.displayName : '',
    };
    ReportForge.renderBuilder();
    ReportForge.renderReport();
    ReportForge.switchView('builder');
};

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Populate font selects
    const fontSelects = ['bodyFontSelect', 'headingFontSelect'];
    fontSelects.forEach(selectId => {
        const sel = document.getElementById(selectId);
        if (!sel) return;
        sel.innerHTML = ReportForge.fonts.map(f => `<option value="${f.value}">${f.label}</option>`).join('');
    });

    // Initialize builder
    ReportForge.initBuilder();

    // Check session
    const user = ReportForge.DB.getCurrentUser();
    if (user) {
        ReportForge.renderDashboard(user);
        ReportForge.switchView('dashboard');
    } else {
        // No valid session — send back to the React auth page
        window.location.href = '/';
    }

    // Enter key on auth forms
    document.getElementById('loginPassword')?.addEventListener('keydown', e => { if (e.key === 'Enter') ReportForge.handleLogin(); });
    document.getElementById('registerConfirm')?.addEventListener('keydown', e => { if (e.key === 'Enter') ReportForge.handleRegister(); });

    // AI Generator Enter key
    document.getElementById('aiGeneratorTopic')?.addEventListener('keydown', e => { if (e.key === 'Enter') ReportForge.runAIReportGenerator(); });

    // Close modals on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(m => {
        m.onclick = e => { if (e.target === m) m.classList.add('hidden'); };
    });

    if (window.lucide) lucide.createIcons();
});