import React, { useState, useEffect } from 'react';
import { Auth } from './components/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Read backend auth session (set by Auth.jsx on login/verify)
  function getAuthUser() {
    try {
      const user = localStorage.getItem('rf_user');
      const token = localStorage.getItem('rf_token');
      if (user && token) return JSON.parse(user);
    } catch (_) {}
    return null;
  }

  // Write a legacy-compatible session so the vanilla JS app recognises the user
  function bridgeToLegacyApp(user) {
    // The legacy DB reads rf_current_user (a username key) and rf_users (object)
    const username = (user.email || user.displayName || 'user').toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const legacyUsers = JSON.parse(localStorage.getItem('rf_users') || '{}');
    legacyUsers[username] = {
      username,
      displayName: user.displayName || user.email,
      passwordHash: 'sso', // not used — we bypass local auth
      createdAt: new Date().toLocaleDateString(),
    };
    localStorage.setItem('rf_users', JSON.stringify(legacyUsers));
    localStorage.setItem('rf_current_user', username);

    // Navigate to the legacy app
    window.location.href = '/legacy/index.html';
  }

  useEffect(() => {
    const user = getAuthUser();
    if (user) {
      // Already logged in — go straight to legacy app
      bridgeToLegacyApp(user);
    }
  }, []);

  const handleLoginSuccess = () => {
    const user = getAuthUser();
    if (user) bridgeToLegacyApp(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('rf_token');
    localStorage.removeItem('rf_user');
    localStorage.removeItem('rf_current_user');
    setCurrentUser(null);
  };

  // Only show the Auth screen — once logged in we redirect to the legacy app
  return <Auth onLoginSuccess={handleLoginSuccess} />;
}

export default App;
