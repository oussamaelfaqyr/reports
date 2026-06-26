// ReportForge Client-Side Database Manager
// Modular design: swap fetch() calls for API endpoints to migrate to a backend
ReportForge.DB = (function() {
    const KEYS = {
        USERS: 'rf_users',
        CURRENT_USER: 'rf_current_user',
        REPORTS_PREFIX: 'rf_reports_',
        SETTINGS_PREFIX: 'rf_settings_'
    };

    function getJson(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) { return defaultValue; }
    }

    function setJson(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch (e) { return false; }
    }

    function simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }
        return 'rfh_' + Math.abs(hash).toString(16);
    }

    function fmtDate() {
        return new Date().toLocaleDateString(undefined, {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    }

    return {
        // --- Authentication ---
        register(username, password, displayName) {
            username = username.trim().toLowerCase();
            displayName = (displayName || username).trim();
            if (!username || !password) return { success: false, message: 'Username and password are required.' };
            if (username.length < 3) return { success: false, message: 'Username must be at least 3 characters.' };
            if (password.length < 6) return { success: false, message: 'Password must be at least 6 characters.' };
            if (!/^[a-z0-9_]+$/.test(username)) return { success: false, message: 'Username can only contain letters, numbers, and underscores.' };

            const users = getJson(KEYS.USERS, {});
            if (users[username]) return { success: false, message: 'Username already taken.' };

            users[username] = {
                username,
                displayName,
                passwordHash: simpleHash(password),
                createdAt: fmtDate()
            };
            setJson(KEYS.USERS, users);
            return { success: true };
        },

        login(username, password) {
            username = username.trim().toLowerCase();
            if (!username || !password) return { success: false, message: 'Username and password are required.' };
            const users = getJson(KEYS.USERS, {});
            const user = users[username];
            if (!user || user.passwordHash !== simpleHash(password)) return { success: false, message: 'Invalid username or password.' };
            setJson(KEYS.CURRENT_USER, username);
            return { success: true, username, displayName: user.displayName };
        },

        logout() {
            localStorage.removeItem(KEYS.CURRENT_USER);
        },

        getCurrentUser() {
            const username = localStorage.getItem(KEYS.CURRENT_USER);
            if (!username) return null;
            const users = getJson(KEYS.USERS, {});
            return users[username] || null;
        },

        // --- Settings ---
        // API key is stored globally (not per-user) so it always saves reliably.
        // Per-user extra settings can be layered on top if needed.
        getSettings() {
            const globalKey = getJson('rf_global_settings', { geminiApiKey: '' });
            // Also check legacy per-user key and merge
            const user = this.getCurrentUser();
            if (user) {
                const userKey = getJson(KEYS.SETTINGS_PREFIX + user.username, {});
                return { ...globalKey, ...userKey };
            }
            return globalKey;
        },

        saveSettings(settings) {
            // Always save to global key — this never fails due to user session issues
            const current = getJson('rf_global_settings', { geminiApiKey: '' });
            const updated = { ...current, ...settings };
            const ok = setJson('rf_global_settings', updated);
            // Also save to per-user key if logged in
            const user = this.getCurrentUser();
            if (user) {
                const userCurrent = getJson(KEYS.SETTINGS_PREFIX + user.username, {});
                setJson(KEYS.SETTINGS_PREFIX + user.username, { ...userCurrent, ...settings });
            }
            return ok;
        },

        // --- Reports CRUD ---
        getReports() {
            const user = this.getCurrentUser();
            if (!user) return [];
            return getJson(KEYS.REPORTS_PREFIX + user.username, []);
        },

        getReportById(reportId) {
            return this.getReports().find(r => r.id === reportId) || null;
        },

        saveReport(reportData) {
            const user = this.getCurrentUser();
            if (!user) return null;
            const key = KEYS.REPORTS_PREFIX + user.username;
            const reports = this.getReports();
            const now = fmtDate();

            if (reportData.id) {
                const index = reports.findIndex(r => r.id === reportData.id);
                if (index !== -1) {
                    reports[index] = { ...reports[index], ...reportData, updatedAt: now };
                    setJson(key, reports);
                    return reports[index];
                }
            }

            const newReport = {
                ...reportData,
                id: 'rep_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                createdAt: now,
                updatedAt: now
            };
            reports.unshift(newReport);
            setJson(key, reports);
            return newReport;
        },

        deleteReport(reportId) {
            const user = this.getCurrentUser();
            if (!user) return false;
            const key = KEYS.REPORTS_PREFIX + user.username;
            const reports = this.getReports().filter(r => r.id !== reportId);
            return setJson(key, reports);
        },

        duplicateReport(reportId) {
            const report = this.getReportById(reportId);
            if (!report) return null;
            const clone = JSON.parse(JSON.stringify(report));
            delete clone.id;
            clone.title = clone.title + ' (Copy)';
            return this.saveReport(clone);
        }
    };
})();
