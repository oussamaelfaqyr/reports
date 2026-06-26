// ReportForge Builder ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Report rendering, editor panel, AI tools, sizing controls
ReportForge.state = ReportForge.defaultState();

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Font Loading ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.loadFont = function(fontValue) {
    const font = ReportForge.fonts.find(f => f.value === fontValue);
    if (!font) return;
    const id = 'gfont-' + fontValue.replace(/\s+/g, '-');
    if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${font.import}&display=swap`;
        document.head.appendChild(link);
    }
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Content Formatting ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.formatContent = function(text, color) {
    if (!text) return '';
    const lines = text.split('\n');
    let html = '';
    let inTable = false;
    let tableRows = [];
    let inUl = false;
    let inOl = false;

    const flushTable = () => {
        if (tableRows.length === 0) return;
        let tHtml = `<table class="report-table">`;
        tableRows.forEach((row, i) => {
            const cells = row.split('|').map(c => c.trim()).filter(Boolean);
            tHtml += '<tr>';
            cells.forEach(cell => {
                const rendered = ReportForge.applyInlineFormatting(cell, color);
                tHtml += i === 0
                    ? `<th style="border-color:${color}20;color:${color}">${rendered}</th>`
                    : `<td>${rendered}</td>`;
            });
            tHtml += '</tr>';
        });
        tHtml += '</table>';
        html += tHtml;
        tableRows = [];
        inTable = false;
    };

    lines.forEach(line => {
        const t = line.trim();
        if (!t) {
            if (inTable) flushTable();
            inUl = false; inOl = false;
            html += '<div class="rf-spacer"></div>';
            return;
        }
        // Table rows
        if (t.startsWith('|')) {
            if (t.replace(/[|\-\s]/g, '') === '') return;
            inTable = true;
            tableRows.push(t);
            return;
        }
        if (inTable) flushTable();

        // Horizontal rule
        if (/^-{3,}$/.test(t) || /^\*{3,}$/.test(t) || /^_{3,}$/.test(t)) {
            inUl = false; inOl = false;
            html += `<hr class="report-hr" style="border-color:${color}30">`;
            return;
        }

        // Headings H1ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œH4
        const hMatch = t.match(/^(#{1,4})\s+(.+)/);
        if (hMatch) {
            inUl = false; inOl = false;
            const level = hMatch[1].length;
            const content = ReportForge.applyInlineFormatting(hMatch[2], color);
            const tag = `h${level + 2}`; // h1 in content ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ <h3>, h2 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ <h4>, etc.
            const sizeMap = { 1: '1.45em', 2: '1.2em', 3: '1.05em', 4: '0.95em' };
            const weightMap = { 1: '700', 2: '700', 3: '600', 4: '600' };
            html += `<div class="report-inline-heading" style="font-size:${sizeMap[level]};font-weight:${weightMap[level]};color:#0f172a;font-family:var(--rf-heading-font,serif);margin:1.4rem 0 0.5rem;line-height:1.25;">${content}</div>`;
            return;
        }

        // Blockquote
        if (t.startsWith('> ')) {
            inUl = false; inOl = false;
            const content = ReportForge.applyInlineFormatting(t.substring(2), color);
            html += `<div class="report-quote" style="border-color:${color}">${content}</div>`;
            return;
        }

        // Bullet list item (- or * or +)
        if (/^[-*+]\s/.test(t)) {
            inOl = false;
            const content = ReportForge.applyInlineFormatting(t.substring(2), color);
            html += `<div class="report-list-item"><div class="bullet" style="background-color:${color}"></div><span>${content}</span></div>`;
            return;
        }

        // Numbered list
        if (/^\d+\.\s/.test(t)) {
            inUl = false;
            const match = t.match(/^(\d+)\.\s(.+)/);
            if (match) {
                const content = ReportForge.applyInlineFormatting(match[2], color);
                html += `<div class="report-list-item"><div class="num-badge" style="background-color:${color}">${match[1]}</div><span>${content}</span></div>`;
            }
            return;
        }

        // Regular paragraph (with inline image + inline formatting)
        inUl = false; inOl = false;
        let lineHtml = t.replace(/!\[([^\]]*)\]\(([^)|]+)(?:\|([^)]+))?\)/g, (m, alt, url, size) => {
            let w = size ? size.trim() : 'var(--rf-image-width, 100%)';
            if (w && /^\d+$/.test(w)) w += 'px';
            return `<img src="${url.trim()}" alt="${alt}" style="max-width:100%;width:${w};height:auto;border-radius:8px;margin:1.25rem 0;box-shadow:0 4px 15px rgba(0,0,0,0.05);display:block;">`;
        });
        lineHtml = ReportForge.applyInlineFormatting(lineHtml, color);
        html += `<p>${lineHtml}</p>`;
    });
    if (inTable) flushTable();
    return html;
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Inline Markdown Formatting (bold, italic, strikethrough, code, highlight, sup, sub, links) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.applyInlineFormatting = function(text, color) {
    if (!text) return text;
    // Escape HTML first (except for already-injected img tags)
    // Process in safe order: code first (protect from other rules)
    text = text.replace(/`([^`]+)`/g, '<code class="report-inline-code">$1</code>');
    // ==highlight==
    text = text.replace(/==([^=]+)==/g, `<mark class="report-highlight" style="background:${color}25;color:${color}">$1</mark>`);
    // ~~strikethrough~~
    text = text.replace(/~~([^~]+)~~/g, '<s class="report-strikethrough">$1</s>');
    // ^superscript^
    text = text.replace(/\^([^\^]+)\^/g, '<sup class="report-sup">$1</sup>');
    // ~subscript~ (only when not ~~, handled after ~~)
    text = text.replace(/(?<!~)~(?!~)([^~]+)(?<!~)~(?!~)/g, '<sub class="report-sub">$1</sub>');
    // **bold** or __bold__
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    // *italic* or _italic_ (single, not double)
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    text = text.replace(/(?<![_])_([^_]+)_(?![_])/g, '<em>$1</em>');
    // [Link Text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" class="report-link" style="color:${color};text-decoration:underline;text-underline-offset:2px;" target="_blank">$1</a>`);
    return text;
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Render Report Preview ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.renderReport = function() {
    const s = ReportForge.state;
    const layout = s.layout || 'classic';

    // Load fonts
    ReportForge.loadFont(s.bodyFont);
    ReportForge.loadFont(s.headingFont);

    // Apply CSS variables to the report sheet
    const sheet = document.getElementById('reportTemplate');
    if (!sheet) return;
    sheet.style.setProperty('--rf-body-font', `'${s.bodyFont}', sans-serif`);
    sheet.style.setProperty('--rf-heading-font', `'${s.headingFont}', serif`);
    sheet.style.setProperty('--rf-title-size', s.titleSize + 'px');
    sheet.style.setProperty('--rf-heading-size', s.headingSize + 'px');
    sheet.style.setProperty('--rf-body-size', s.bodySize + 'px');
    sheet.style.setProperty('--rf-line-height', s.lineHeight);
    sheet.style.setProperty('--rf-margin', s.pageMargin + 'px');
    sheet.style.setProperty('--rf-image-width', (s.imageWidth || 100) + '%');
    sheet.style.setProperty('--rf-accent', s.accent);

    // Set layout class
    sheet.className = sheet.className.replace(/\blayout-\S+/g, '').trim();
    if (layout !== 'classic') sheet.classList.add('layout-' + layout);

    // Build logo HTML
    const logoHtml = (s.logo && s.logoPosition !== 'hide')
        ? `<img src="${s.logo}" style="height:${s.logoHeight}px;width:${s.logoWidth}px;object-fit:contain">`
        : '';
    const logoLeft = s.logoPosition === 'left' ? logoHtml : '';
    const logoRight = s.logoPosition === 'right' ? logoHtml : '';

    // Build cover HTML based on layout
    const tagStyle = `background:${s.accent}1A;color:${s.accent};`;
    const cover = document.querySelector('#reportTemplate .report-cover');
    if (cover) {
        if (layout === 'sidebar') {
            cover.innerHTML = `
                <div class="cover-sidebar">
                    <div class="cover-sidebar-top">
                        ${logoLeft ? `<div style="margin-bottom:24px;">${logoLeft}</div>` : ''}
                        <div class="cover-sidebar-label">Date</div>
                        <div class="cover-sidebar-value" id="reportDate">${s.date}</div>
                        <div style="margin-top: 2rem; width: 40px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 99px;"></div>
                        <div class="cover-sidebar-label" style="margin-top:1.5rem;">Authored by</div>
                        <div class="cover-sidebar-value" id="reportAuthor">${s.author}</div>
                        <div class="cover-sidebar-value" style="opacity:0.65; font-size:0.8rem; font-weight:400;" id="reportRole">${s.role}</div>
                    </div>
                    ${logoRight ? `<div>${logoRight}</div>` : '<div></div>'}
                </div>
                <div class="cover-main">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:auto;">
                        <div></div>
                        <div id="logoContainerRight"></div>
                    </div>
                    <div>
                        <div id="accentTag" class="report-tag" style="${tagStyle}">${s.templateKey || 'Report'}</div>
                        <h1 id="reportTitle" style="font-family:var(--rf-heading-font);font-size:var(--rf-title-size);font-weight:800;color:#0f172a;line-height:1.1;letter-spacing:-0.02em;margin-bottom:1.25rem;">${s.title}</h1>
                        <p id="reportSubtitle" style="font-size:1.05rem;color:#64748b;line-height:1.65;max-width:400px;">${s.subtitle}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'centered') {
            cover.innerHTML = `
                <div class="report-cover-top" style="justify-content:center;margin-bottom:auto;">
                    <div id="logoContainerLeft" style="display:flex;align-items:center;justify-content:center;">${logoLeft}</div>
                </div>
                <div class="report-cover-body" style="text-align:center;">
                    <div id="accentTag" class="report-tag" style="${tagStyle}">${s.templateKey || 'Report'}</div>
                    <h1 id="reportTitle" style="font-family:var(--rf-heading-font);font-size:var(--rf-title-size);font-weight:800;color:#0f172a;line-height:1.1;letter-spacing:-0.02em;margin-bottom:1.25rem;text-align:center;">${s.title}</h1>
                    <div class="cover-rule"></div>
                    <p id="reportSubtitle" style="font-size:1.05rem;color:#64748b;line-height:1.65;max-width:500px;margin:0 auto;text-align:center;">${s.subtitle}</p>
                </div>
                <div class="report-cover-footer" style="justify-content:center;text-align:center;flex-direction:column;align-items:center;border-top:1px solid #e2e8f0;padding-top:2rem;margin-top:auto;">
                    <p style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Authored by</p>
                    <p id="reportAuthor" style="font-size:1.05rem;font-weight:700;color:#0f172a;">${s.author}</p>
                    <p id="reportRole" style="font-size:0.875rem;color:#64748b;margin-top:2px;">${s.role}</p>
                    <p id="reportDate" style="font-size:0.875rem;color:#94a3b8;font-weight:500;margin-top:6px;">${s.date}</p>
                </div>
            `;
        } else if (layout === 'fullbleed') {
            cover.innerHTML = `
                <div class="report-cover-top">
                    <div id="logoContainerLeft" style="display:flex;align-items:center;">${logoLeft}</div>
                    <div style="text-align:right;"><p id="reportDate" style="color:rgba(255,255,255,0.6);font-size:0.875rem;">${s.date}</p></div>
                    <div id="logoContainerRight" style="display:flex;align-items:center;">${logoRight}</div>
                </div>
                <div class="report-cover-body">
                    <div id="accentTag" class="report-tag" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">${s.templateKey || 'Report'}</div>
                    <h1 id="reportTitle" style="font-family:var(--rf-heading-font);font-size:var(--rf-title-size);font-weight:800;color:white;line-height:1.1;letter-spacing:-0.02em;margin-bottom:1.25rem;">${s.title}</h1>
                    <p id="reportSubtitle" style="font-size:1.05rem;color:rgba(255,255,255,0.75);line-height:1.65;max-width:540px;">${s.subtitle}</p>
                </div>
                <div class="report-cover-footer" style="border-top:1px solid rgba(255,255,255,0.2);">
                    <div>
                        <p style="font-size:0.65rem;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Authored by</p>
                        <p id="reportAuthor" style="font-size:1.05rem;font-weight:700;color:white;">${s.author}</p>
                        <p id="reportRole" style="font-size:0.875rem;color:rgba(255,255,255,0.65);margin-top:2px;">${s.role}</p>
                    </div>
                    <i data-lucide="bookmark" style="width:36px;height:36px;color:rgba(255,255,255,0.2);"></i>
                </div>
                <div id="coverCircle" class="cover-deco" style="width:360px;height:360px;top:-90px;right:-90px;background:rgba(255,255,255,0.05);"></div>
                <div id="coverSquare" class="cover-deco" style="width:240px;height:240px;bottom:-80px;left:-60px;background:rgba(255,255,255,0.05);"></div>
            `;
        } else if (layout === 'magazine') {
            cover.innerHTML = `
                <div class="report-cover-top">
                    <div id="logoContainerLeft" style="display:flex;align-items:center;">${logoLeft}</div>
                    <div style="text-align:right;"><p id="reportDate">${s.date}</p></div>
                    <div id="logoContainerRight" style="display:flex;align-items:center;">${logoRight}</div>
                </div>
                <div class="report-cover-body">
                    <div class="cover-mag-number">01</div>
                    <div id="accentTag" class="report-tag" style="${tagStyle}">${s.templateKey || 'Report'}</div>
                    <h1 id="reportTitle" style="font-family:var(--rf-heading-font);font-size:var(--rf-title-size);font-weight:800;color:#0f172a;line-height:1.05;letter-spacing:-0.03em;margin-bottom:1.25rem;">${s.title}</h1>
                    <div style="width:100%;height:2px;background:var(--rf-accent);margin-bottom:1.25rem;"></div>
                    <p id="reportSubtitle" style="font-size:1.05rem;color:#64748b;line-height:1.65;max-width:580px;">${s.subtitle}</p>
                </div>
                <div class="report-cover-footer">
                    <div>
                        <p style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Authored by</p>
                        <p id="reportAuthor" style="font-size:1.05rem;font-weight:700;color:#0f172a;">${s.author}</p>
                        <p id="reportRole" style="font-size:0.875rem;color:#64748b;margin-top:2px;">${s.role}</p>
                    </div>
                    <i data-lucide="bookmark" style="width:36px;height:36px;color:#e2e8f0;"></i>
                </div>
            `;
        } else {
            // classic layout ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â restore original static HTML
            cover.innerHTML = `
                <div class="report-cover-top">
                    <div id="logoContainerLeft" style="display:flex;align-items:center;">${logoLeft}</div>
                    <div style="text-align:right;"><p id="reportDate">${s.date}</p></div>
                    <div id="logoContainerRight" style="display:flex;align-items:center;">${logoRight}</div>
                </div>
                <div class="report-cover-body">
                    <div id="accentTag" class="report-tag" style="${tagStyle}">Official Report</div>
                    <h1 id="reportTitle" style="font-family:var(--rf-heading-font);font-size:var(--rf-title-size);font-weight:800;color:#0f172a;line-height:1.1;letter-spacing:-0.02em;margin-bottom:1.25rem;">${s.title}</h1>
                    <p id="reportSubtitle" style="font-size:1.05rem;color:#64748b;line-height:1.65;max-width:540px;">${s.subtitle}</p>
                </div>
                <div class="report-cover-footer">
                    <div>
                        <p style="font-size:0.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Authored by</p>
                        <p id="reportAuthor" style="font-size:1.05rem;font-weight:700;color:#0f172a;">${s.author}</p>
                        <p id="reportRole" style="font-size:0.875rem;color:#64748b;margin-top:2px;">${s.role}</p>
                    </div>
                    <i data-lucide="bookmark" style="width:36px;height:36px;color:#e2e8f0;"></i>
                </div>
                <div id="coverCircle" class="cover-deco" style="width:360px;height:360px;top:-90px;right:-90px;opacity:0.07;background:${s.accent};"></div>
                <div id="coverSquare" class="cover-deco" style="width:240px;height:240px;bottom:-80px;left:-60px;opacity:0.05;background:${s.accent};"></div>
            `;
        }
        if (window.lucide) lucide.createIcons();
    }

    // Set footer title
    const footerTitle = document.getElementById('footerTitle');
    if (footerTitle) footerTitle.textContent = s.title;

    // Sections content
    const reportContent = document.getElementById('reportContent');
    if (!reportContent) return;
    reportContent.innerHTML = '';
    s.sections.forEach((section, index) => {
        const el = document.createElement('div');
        el.className = 'report-section';
        el.dataset.sectionId = section.id;

        let imgHtml = '';
        if (section.sectionImage) {
            let flexAlign = section.sectionImageAlign === 'left' ? 'flex-start' : (section.sectionImageAlign === 'right' ? 'flex-end' : 'center');
            imgHtml = `<div style="display:flex; justify-content:${flexAlign}; margin: 1.5rem 0;">
                <img src="${section.sectionImage}" style="width:${section.sectionImageWidth}%; border-radius:8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            </div>`;
        }

        let bodyContent = ReportForge.formatContent(section.content, s.accent);
        if (section.sectionImagePos === 'top') {
            bodyContent = imgHtml + bodyContent;
        } else {
            bodyContent = bodyContent + imgHtml;
        }

        const numLabel = String(index + 1).padStart(2, '0');

        if (layout === 'sidebar') {
            el.innerHTML = `
                <div class="section-header">
                    <h2>${section.title}</h2>
                </div>
                <div class="section-number-bg">${numLabel}</div>
                <div class="section-body">${bodyContent}</div>
            `;
        } else if (layout === 'centered') {
            el.innerHTML = `
                <div class="section-number-bg">${numLabel}</div>
                <div class="section-header">
                    <div class="section-bar" style="background-color:${s.accent}"></div>
                    <h2>${section.title}</h2>
                </div>
                <div class="section-body">${bodyContent}</div>
            `;
        } else if (layout === 'fullbleed') {
            el.innerHTML = `
                <div class="section-header">
                    <div class="section-title-band">${section.title}</div>
                </div>
                <div class="section-body">${bodyContent}</div>
            `;
        } else if (layout === 'magazine') {
            el.innerHTML = `
                <div class="section-header">
                    <div class="section-number-bg">${numLabel}</div>
                    <h2>${section.title}</h2>
                </div>
                <div class="section-body">${bodyContent}</div>
            `;
        } else {
            // classic
            el.innerHTML = `
                <div class="section-header">
                    <div class="section-bar" style="background-color:${s.accent}"></div>
                    <h2>${section.title}</h2>
                </div>
                <div class="section-number-bg">${numLabel}</div>
                <div class="section-body">${bodyContent}</div>
            `;
        }
        // Mark section-body for direct editing
        const body = el.querySelector('.section-body');
        if (body) {
            body.dataset.editId = section.id;
        }
        reportContent.appendChild(el);
    });
    if (window.lucide) lucide.createIcons();

    // Re-attach direct-edit listeners after each render
    if (ReportForge._directEditBound) ReportForge.initDirectEdit();
};

// â”€â”€ Direct Preview Editing (WYSIWYG) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', emDelimiter: '*' });
turndownService.addRule('strikethrough', {
    filter: ['del', 's', 'strike'],
    replacement: function (content) { return '~~' + content + '~~'; }
});
turndownService.addRule('underline', {
    filter: function (node) { return node.nodeName === 'U' || (node.nodeName === 'SPAN' && node.style.textDecoration === 'underline'); },
    replacement: function (content) { return '<u>' + content + '</u>'; }
});
turndownService.addRule('highlight', {
    filter: function (node) { return node.nodeName === 'MARK' || (node.nodeName === 'SPAN' && node.style.backgroundColor); },
    replacement: function (content) { return '==' + content + '=='; }
});
turndownService.addRule('color', {
    filter: function (node) { return node.nodeName === 'SPAN' && node.style.color; },
    replacement: function (content, node) { return '<span style="color:' + node.style.color + '">' + content + '</span>'; }
});
turndownService.addRule('size', {
    filter: function (node) { return node.nodeName === 'SPAN' && node.style.fontSize; },
    replacement: function (content, node) { return '<span style="font-size:' + node.style.fontSize + '">' + content + '</span>'; }
});

ReportForge.initDirectEdit = function() {
    ReportForge._directEditBound = true;
    const preview = document.getElementById('preview-panel');
    if (!preview) return;

    preview.querySelectorAll('[data-edit-id]').forEach(body => {
        const fresh = body.cloneNode(true);
        body.parentNode.replaceChild(fresh, body);
        
        fresh.contentEditable = 'true';
        fresh.spellcheck = true;
        fresh.style.cursor = 'text';
        fresh.style.transition = 'background 0.2s';
        fresh.style.outline = 'none';

        fresh.addEventListener('mouseenter', () => fresh.style.background = 'rgba(0,0,0,0.02)');
        fresh.addEventListener('mouseleave', () => fresh.style.background = 'transparent');
        fresh.addEventListener('focus', () => fresh.style.background = 'rgba(0,0,0,0.03)');
        fresh.addEventListener('blur', () => fresh.style.background = 'transparent');

        const sectionId = parseInt(fresh.dataset.editId);
        const section = ReportForge.state.sections.find(s => s.id === sectionId);
        if (!section) return;

        // On input, seamlessly update the markdown state without re-rendering the focused element
        fresh.addEventListener('input', () => {
            const markdown = turndownService.turndown(fresh.innerHTML);
            section.content = markdown;
            
            // Sync to the left panel textarea immediately
            const sideTa = document.querySelector('textarea[data-id="' + sectionId + '"]');
            if (sideTa) sideTa.value = markdown;
        });
        
        // Prevent enter from making weird divs, enforce paragraphs
        fresh.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) {
                document.execCommand('insertParagraph', false);
                e.preventDefault();
            }
        });
    });
};



// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Render Builder Panel ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.renderBuilder = function() {
    const s = ReportForge.state;

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setVal('inputTitle', s.title);
    setVal('inputSubtitle', s.subtitle);
    setVal('inputAuthor', s.author);
    setVal('inputRole', s.role);
    setVal('inputDate', s.date);

    if (s.logo) {
        const lp = document.getElementById('logoPreview');
        if (lp) lp.src = s.logo;
    }

    // Logo position buttons
    document.querySelectorAll('.logo-pos-btn').forEach(btn => {
        const active = btn.dataset.pos === s.logoPosition;
        btn.classList.toggle('active', active);
    });

    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === s.accent);
    });

    // Font selectors
    const bf = document.getElementById('bodyFontSelect');
    const hf = document.getElementById('headingFontSelect');
    if (bf) bf.value = s.bodyFont;
    if (hf) hf.value = s.headingFont;

    // Sizing sliders
    const sliders = [
        ['sliderTitleSize', 'valTitleSize', 'titleSize'],
        ['sliderHeadingSize', 'valHeadingSize', 'headingSize'],
        ['sliderBodySize', 'valBodySize', 'bodySize'],
        ['sliderLineHeight', 'valLineHeight', 'lineHeight'],
        ['sliderLogoWidth', 'valLogoWidth', 'logoWidth'],
        ['sliderLogoHeight', 'valLogoHeight', 'logoHeight'],
        ['sliderPageMargin', 'valPageMargin', 'pageMargin'],
        ['sliderImageWidth', 'valImageWidth', 'imageWidth'],
    ];
    sliders.forEach(([sliderId, valId, key]) => {
        const slider = document.getElementById(sliderId);
        const valEl = document.getElementById(valId);
        if (slider) slider.value = s[key];
        if (valEl) valEl.textContent = s[key];
    });

    // Render sections list
    const sectionsList = document.getElementById('sectionsList');
    if (!sectionsList) return;
    sectionsList.innerHTML = '';
    s.sections.forEach((section, index) => {
        const el = document.createElement('div');
        el.className = 'section-card';
        el.dataset.id = section.id;
        el.innerHTML = `
            <div class="section-card-header">
                <div class="section-card-drag"><i data-lucide="grip-vertical" class="w-4 h-4"></i></div>
                <input type="text" value="${section.title.replace(/"/g, '&quot;')}" data-id="${section.id}" data-field="title" class="section-title-input" placeholder="Section title...">
                <div class="section-card-actions">
                    <button data-id="${section.id}" data-dir="up" class="moveSection icon-btn" title="Move Up"><i data-lucide="chevron-up" class="w-4 h-4"></i></button>
                    <button data-id="${section.id}" data-dir="down" class="moveSection icon-btn" title="Move Down"><i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                    <button data-id="${section.id}" class="deleteSection icon-btn danger" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
            </div>
            <textarea data-id="${section.id}" data-field="content" rows="6" class="section-textarea" placeholder="Write your content hereÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦\n\nFormatting supported ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â click ÃƒÆ’Ã‚Â¢Ãƒâ€šÃ‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ below to see all syntax">${section.content}</textarea>
            <div class="section-format-bar">
                <button class="fmt-toggle-btn" onclick="document.getElementById('formatGuideModal').classList.remove('hidden')" title="Formatting Guide">ÃƒÆ’Ã‚Â¢Ãƒâ€šÃ‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ Format Guide</button>
                <span class="fmt-quick"><strong>**bold**</strong> &nbsp; <em>*italic*</em> &nbsp; <s>~~strike~~</s> &nbsp; <code>\`code\`</code> &nbsp; ==highlight== &nbsp; ^sup^ &nbsp; ~sub~</span>
            </div>

            <div class="section-ai-bar">
                <button class="ai-action-btn" data-id="${section.id}" data-action="fix">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¦ Fix Grammar</button>
                <button class="ai-action-btn" data-id="${section.id}" data-action="expand">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¦ Expand</button>
                <button class="ai-action-btn" data-id="${section.id}" data-action="summarize">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¦ Summarize</button>
                <div class="ai-tone-wrap">
                    <select class="ai-tone-select" data-id="${section.id}">
                        <option value="">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¦ Rewrite Tone...</option>
                        <option value="professional">Professional</option>
                        <option value="creative">Creative</option>
                        <option value="persuasive">Persuasive</option>
                        <option value="technical">Technical</option>
                        <option value="academic">Academic</option>
                    </select>
                </div>
            </div>
            <div class="section-image-panel" style="background:#f8fafc; border-top:1px solid #e2e8f0; padding:10px; font-size:0.8rem; display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:600; color:#475569;">Section Image</span>
                    <label class="icon-btn" style="cursor:pointer; display:flex; align-items:center; gap:4px; font-size:0.75rem; background:white; border:1px solid #cbd5e1; padding:2px 6px; border-radius:4px;">
                        <i data-lucide="upload" class="w-3 h-3"></i> Upload
                        <input type="file" class="section-image-upload" data-id="${section.id}" accept="image/*" style="display:none;">
                    </label>
                </div>
                ${section.sectionImage ? `
                <div style="display:flex; gap:10px; align-items:center; background:white; padding:6px; border:1px solid #e2e8f0; border-radius:4px;">
                    <img src="${section.sectionImage}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;">
                    <div style="flex:1; display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
                        <div style="display:flex; align-items:center; gap:4px;">
                            <label>Width:</label>
                            <input type="range" class="sec-img-width" data-id="${section.id}" min="20" max="100" value="${section.sectionImageWidth || 100}" style="width:60px;">
                        </div>
                        <div style="display:flex; align-items:center; gap:4px;">
                            <label>Align:</label>
                            <select class="sec-img-align" data-id="${section.id}" style="border:1px solid #cbd5e1; border-radius:4px; padding:2px;">
                                <option value="left" ${section.sectionImageAlign==='left'?'selected':''}>Left</option>
                                <option value="center" ${section.sectionImageAlign==='center'?'selected':''}>Center</option>
                                <option value="right" ${section.sectionImageAlign==='right'?'selected':''}>Right</option>
                            </select>
                        </div>
                        <div style="display:flex; align-items:center; gap:4px;">
                            <label>Pos:</label>
                            <select class="sec-img-pos" data-id="${section.id}" style="border:1px solid #cbd5e1; border-radius:4px; padding:2px;">
                                <option value="top" ${section.sectionImagePos==='top'?'selected':''}>Top</option>
                                <option value="bottom" ${section.sectionImagePos==='bottom'?'selected':''}>Bottom</option>
                            </select>
                        </div>
                    </div>
                    <button class="sec-img-remove icon-btn danger" data-id="${section.id}" style="padding:4px;"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                ` : ''}
            </div>
        `;
        sectionsList.appendChild(el);
    });
    if (window.lucide) lucide.createIcons();
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Load Template ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.loadTemplate = function(key) {
    const template = ReportForge.templates[key];
    if (!template) return;
    const base = ReportForge.defaultState();
    const tdata = template.data || {};
    const user = ReportForge.DB.getCurrentUser();

    ReportForge.state = {
        ...base,
        ...tdata,
        id: null,
        templateKey: key,
        accent: template.accent,
        bodyFont: template.bodyFont || base.bodyFont,
        headingFont: template.headingFont || base.headingFont,
        author: tdata.author || (user ? user.displayName : ''),
        sections: tdata.sections
            ? tdata.sections.map((s, i) => ({ ...s, id: Date.now() + i }))
            : base.sections
    };
    ReportForge.state.layout = template.layout || 'classic';

    ReportForge.renderBuilder();
    ReportForge.renderReport();
    ReportForge.switchView('builder');
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Save Current Report ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.saveCurrentReport = function() {
    const s = ReportForge.state;
    if (!s.title || s.title === 'Untitled Report') {
        ReportForge.showToast('Please add a title before saving.', 'warn');
        return;
    }
    const saved = ReportForge.DB.saveReport({ ...s });
    if (saved) {
        ReportForge.state.id = saved.id;
        ReportForge.showToast('Report saved!', 'success');
    } else {
        ReportForge.showToast('Failed to save. Are you logged in?', 'error');
    }
};

// ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ AI Section Actions ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
ReportForge.runAIAction = async function(sectionId, action) {
    const section = ReportForge.state.sections.find(s => s.id == sectionId);
    if (!section) return;

    const textarea = document.querySelector(`textarea[data-id="${sectionId}"]`);
    const originalContent = section.content;

    try {
        ReportForge.setAILoading(sectionId, true);
        let result = '';
        const reportContext = `${ReportForge.state.title}: ${ReportForge.state.subtitle}`;

        if (action === 'fix') result = await ReportForge.AI.fixGrammar(originalContent);
        else if (action === 'expand') result = await ReportForge.AI.expandText(originalContent);
        else if (action === 'summarize') result = await ReportForge.AI.summarize(originalContent);
        else if (action === 'generate') result = await ReportForge.AI.generateSection(section.title, reportContext);
        else if (action.startsWith('tone:')) {
            result = await ReportForge.AI.rewriteTone(originalContent, action.split(':')[1]);
        }

        if (result) {
            section.content = result;
            if (textarea) textarea.value = result;
            ReportForge.renderReport();
            ReportForge.showToast('AI update applied!', 'success');
        }
    } catch (err) {
        if (err.message === 'NO_API_KEY') {
            ReportForge.showToast('No Gemini API key set. Go to Settings.', 'error');
            ReportForge.openSettingsModal();
        } else {
            ReportForge.showToast('AI Error: ' + err.message, 'error');
        }
    } finally {
        ReportForge.setAILoading(sectionId, false);
    }
};

ReportForge.setAILoading = function(sectionId, isLoading) {
    const card = document.querySelector(`.section-card[data-id="${sectionId}"]`);
    if (!card) return;
    card.classList.toggle('ai-loading', isLoading);
    const btns = card.querySelectorAll('.ai-action-btn, .ai-tone-select');
    btns.forEach(b => b.disabled = isLoading);
};

// â”€â”€ Initialize Builder Event Listeners â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
ReportForge.initBuilder = function() {
    const s = ReportForge.state;

    // Basic field inputs
    const fields = [
        ['inputTitle', 'title'], ['inputSubtitle', 'subtitle'],
        ['inputAuthor', 'author'], ['inputRole', 'role'], ['inputDate', 'date']
    ];
    fields.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.oninput = e => { ReportForge.state[key] = e.target.value; ReportForge.renderReport(); };
    });

    // Logo upload
    const logoUpload = document.getElementById('logoUpload');
    if (logoUpload) {
        logoUpload.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                ReportForge.state.logo = ev.target.result;
                const lp = document.getElementById('logoPreview');
                if (lp) lp.src = ev.target.result;
                ReportForge.renderReport();
            };
            reader.readAsDataURL(file);
        };
    }

    // Logo position
    document.querySelectorAll('.logo-pos-btn').forEach(btn => {
        btn.onclick = () => { ReportForge.state.logoPosition = btn.dataset.pos; ReportForge.renderBuilder(); ReportForge.renderReport(); };
    });

    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.onclick = () => { ReportForge.state.accent = btn.dataset.color; ReportForge.renderBuilder(); ReportForge.renderReport(); };
    });

    // Custom color picker
    const customColor = document.getElementById('customColorPicker');
    if (customColor) {
        customColor.oninput = e => { ReportForge.state.accent = e.target.value; ReportForge.renderBuilder(); ReportForge.renderReport(); };
    }

    // Font selectors
    const bf = document.getElementById('bodyFontSelect');
    const hf = document.getElementById('headingFontSelect');
    if (bf) bf.onchange = e => { ReportForge.state.bodyFont = e.target.value; ReportForge.loadFont(e.target.value); ReportForge.renderReport(); };
    if (hf) hf.onchange = e => { ReportForge.state.headingFont = e.target.value; ReportForge.loadFont(e.target.value); ReportForge.renderReport(); };

    // Sizing sliders
    const sliders = [
        ['sliderTitleSize', 'valTitleSize', 'titleSize'],
        ['sliderHeadingSize', 'valHeadingSize', 'headingSize'],
        ['sliderBodySize', 'valBodySize', 'bodySize'],
        ['sliderLineHeight', 'valLineHeight', 'lineHeight'],
        ['sliderLogoWidth', 'valLogoWidth', 'logoWidth'],
        ['sliderLogoHeight', 'valLogoHeight', 'logoHeight'],
        ['sliderPageMargin', 'valPageMargin', 'pageMargin'],
        ['sliderImageWidth', 'valImageWidth', 'imageWidth'],
    ];
    sliders.forEach(([sliderId, valId, key]) => {
        const slider = document.getElementById(sliderId);
        const valEl = document.getElementById(valId);
        if (slider) slider.oninput = e => {
            const v = parseFloat(e.target.value);
            ReportForge.state[key] = v;
            if (valEl) valEl.textContent = v;
            ReportForge.renderReport();
        };
    });

    // Sections list: delegated events
    const sectionsList = document.getElementById('sectionsList');
    if (sectionsList) {
        sectionsList.oninput = e => {
            if (e.target.dataset.id && e.target.dataset.field) {
                const id = parseInt(e.target.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                if (sec) { sec[e.target.dataset.field] = e.target.value; ReportForge.renderReport(); }
            } else if (e.target.classList.contains('sec-img-width')) {
                const id = parseInt(e.target.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                if (sec) { sec.sectionImageWidth = e.target.value; ReportForge.renderReport(); }
            }
        };

        sectionsList.onclick = async e => {
            // Delete
            const del = e.target.closest('.deleteSection');
            if (del) {
                const id = parseInt(del.dataset.id);
                ReportForge.state.sections = ReportForge.state.sections.filter(s => s.id !== id);
                ReportForge.renderBuilder(); ReportForge.renderReport(); return;
            }
            // Move
            const move = e.target.closest('.moveSection');
            if (move) {
                const id = parseInt(move.dataset.id);
                const dir = move.dataset.dir;
                const sections = ReportForge.state.sections;
                const idx = sections.findIndex(s => s.id === id);
                if (dir === 'up' && idx > 0) {
                    [sections[idx - 1], sections[idx]] = [sections[idx], sections[idx - 1]];
                } else if (dir === 'down' && idx < sections.length - 1) {
                    [sections[idx + 1], sections[idx]] = [sections[idx], sections[idx + 1]];
                }
                ReportForge.renderBuilder(); ReportForge.renderReport(); return;
            }
            // Image Remove
            const imgRmBtn = e.target.closest('.sec-img-remove');
            if (imgRmBtn) {
                const id = parseInt(imgRmBtn.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                if (sec) {
                    sec.sectionImage = null;
                    ReportForge.renderBuilder(); 
                    ReportForge.renderReport();
                }
                return;
            }
            // AI Actions
            const aiBtn = e.target.closest('.ai-action-btn');
            if (aiBtn) {
                const id = aiBtn.dataset.id;
                const action = aiBtn.dataset.action;
                await ReportForge.runAIAction(id, action);
                return;
            }
        };

        // Change events (file upload, dropdowns)
        sectionsList.onchange = async e => {
            const sel = e.target.closest('.ai-tone-select');
            if (sel && sel.value) {
                const id = sel.dataset.id;
                await ReportForge.runAIAction(id, 'tone:' + sel.value);
                sel.value = '';
            }
            if (e.target.classList.contains('section-image-upload')) {
                const id = parseInt(e.target.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                const file = e.target.files[0];
                if (sec && file) {
                    const reader = new FileReader();
                    reader.onload = ev => {
                        sec.sectionImage = ev.target.result;
                        ReportForge.renderBuilder();
                        ReportForge.renderReport();
                    };
                    reader.readAsDataURL(file);
                }
            } else if (e.target.classList.contains('sec-img-align')) {
                const id = parseInt(e.target.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                if (sec) { sec.sectionImageAlign = e.target.value; ReportForge.renderReport(); }
            } else if (e.target.classList.contains('sec-img-pos')) {
                const id = parseInt(e.target.dataset.id);
                const sec = ReportForge.state.sections.find(s => s.id === id);
                if (sec) { sec.sectionImagePos = e.target.value; ReportForge.renderBuilder(); ReportForge.renderReport(); }
            }
        };
    }

    // Add Section
    const addBtn = document.getElementById('addSectionBtn');
    if (addBtn) {
        addBtn.onclick = () => {
            const newSec = { id: Date.now(), title: 'New Section', content: 'Start writing your content here.\n\nClick ÃƒÆ’Ã‚Â¢Ãƒâ€šÃ‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ Format Guide below to see all supported markdown syntax.' };
            ReportForge.state.sections.push(newSec);
            ReportForge.renderBuilder(); ReportForge.renderReport();
            // Scroll to the new section
            setTimeout(() => {
                const cards = document.querySelectorAll('.section-card');
                if (cards.length) cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        };
    }

    // AI Generate Section (from title)
    const aiGenBtn = document.getElementById('aiGenerateSectionBtn');
    if (aiGenBtn) {
        aiGenBtn.onclick = async () => {
            const titleInput = document.getElementById('aiSectionTitleInput');
            if (!titleInput || !titleInput.value.trim()) {
                ReportForge.showToast('Enter a section title first.', 'warn');
                return;
            }
            const title = titleInput.value.trim();
            const newSec = { id: Date.now(), title, content: '...' };
            ReportForge.state.sections.push(newSec);
            ReportForge.renderBuilder();
            ReportForge.renderReport();
            await ReportForge.runAIAction(newSec.id, 'generate');
            titleInput.value = '';
        };
    }

    // Save button
    const saveBtn = document.getElementById('saveReportBtn');
    if (saveBtn) saveBtn.onclick = () => ReportForge.saveCurrentReport();

    // AI Suggest Titles
    const suggestTitlesBtn = document.getElementById('suggestTitlesBtn');
    if (suggestTitlesBtn) {
        suggestTitlesBtn.onclick = async () => {
            try {
                suggestTitlesBtn.disabled = true;
                suggestTitlesBtn.textContent = 'Thinking...';
                const allContent = ReportForge.state.sections.map(s => s.title + ': ' + s.content).join('\n\n');
                const suggestions = await ReportForge.AI.suggestTitles(allContent);
                ReportForge.showTitleSuggestions(suggestions);
            } catch (err) {
                if (err.message === 'NO_API_KEY') {
                    ReportForge.showToast('No Gemini API key set. Go to Settings.', 'error');
                } else {
                    ReportForge.showToast('Could not get suggestions: ' + err.message, 'error');
                }
            } finally {
                suggestTitlesBtn.disabled = false;
                suggestTitlesBtn.textContent = '✦ Suggest Titles';
            }
        };
    }

    // PDF download
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.onclick = () => {
            if (typeof html2pdf === 'undefined') {
                ReportForge.showToast('PDF library failed to load. Check internet connection.', 'error');
                return;
            }
            const element = document.getElementById('reportTemplate');
            const opt = {
                margin: 0,
                filename: `${ReportForge.state.title.replace(/\s+/g, '_')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            const originalHTML = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Generating...';
            downloadBtn.disabled = true;
            if (window.lucide) lucide.createIcons();
            setTimeout(() => {
                html2pdf().set(opt).from(element).save()
                    .then(() => { downloadBtn.innerHTML = originalHTML; downloadBtn.disabled = false; if (window.lucide) lucide.createIcons(); })
                    .catch(err => { console.error(err); ReportForge.showToast('PDF generation failed.', 'error'); downloadBtn.innerHTML = originalHTML; downloadBtn.disabled = false; if (window.lucide) lucide.createIcons(); });
            }, 200);
        };
    }
};

// ── Title Suggestions Popover ─────────────────────────────────────────────────
ReportForge.showTitleSuggestions = function(suggestions) {
    const existing = document.getElementById('titleSuggestionsPopover');
    if (existing) existing.remove();

    const popover = document.createElement('div');
    popover.id = 'titleSuggestionsPopover';
    popover.className = 'title-suggestions-popover';
    popover.innerHTML = `
        <div class="ts-header">
            <span>✦ AI Title Suggestions</span>
            <button onclick="document.getElementById('titleSuggestionsPopover').remove()" class="ts-close">✕</button>
        </div>
        ${suggestions.map(s => `
            <div class="ts-item" onclick="ReportForge.applyTitleSuggestion('${s.title.replace(/'/g, "\\'")}', '${s.subtitle.replace(/'/g, "\\'")}')">
                <div class="ts-title">${s.title}</div>
                <div class="ts-subtitle">${s.subtitle}</div>
            </div>
        `).join('')}
    `;
    document.getElementById('builder-panel').appendChild(popover);
};

ReportForge.applyTitleSuggestion = function(title, subtitle) {
    ReportForge.state.title = title;
    ReportForge.state.subtitle = subtitle;
    ReportForge.renderBuilder();
    ReportForge.renderReport();
    const popover = document.getElementById('titleSuggestionsPopover');
    if (popover) popover.remove();
    ReportForge.showToast('Title applied!', 'success');
};

// ── Floating Toolbar Logic ────────────────────────────────────────────────────
ReportForge.initFloatingToolbar = function() {
    const toolbar = document.getElementById('floatingToolbar');
    const colorPicker = document.getElementById('ftColorPicker');
    if (!toolbar) return;

    let currentSectionId = null;
    let lastSelectedText = '';
    let applyingFormat = false;

    const fmtMap = {
        bold:          { p: '**',  s: '**' },
        italic:        { p: '*',   s: '*'  },
        strikethrough: { p: '~~',  s: '~~' },
        highlight:     { p: '==',  s: '==' },
        underline:     { p: '<u>', s: '</u>' },
        'size-up':     { p: '<span style="font-size:1.2em">', s: '</span>' },
        'size-down':   { p: '<span style="font-size:0.8em">', s: '</span>' },
    };

    function updateActiveButtons(md, idx, text) {
        document.querySelectorAll('.ft-btn[data-fmt]').forEach(btn => {
            const m = fmtMap[btn.dataset.fmt];
            if (!m) return;
            const before = md.substring(0, idx);
            const after  = md.substring(idx + text.length);
            const isActive = before.endsWith(m.p) && after.startsWith(m.s);
            btn.style.background = isActive ? 'rgba(255,255,255,0.25)' : '';
            btn.style.color      = isActive ? '#ffffff' : '';
            btn.title = (isActive ? 'Remove ' : 'Apply ') + btn.dataset.fmt;
        });
    }

    document.addEventListener('selectionchange', () => {
        if (applyingFormat) return;

        const activeEl = document.activeElement;
        const isTextarea = activeEl && activeEl.tagName === 'TEXTAREA';
        const isWysiwyg = activeEl && activeEl.contentEditable === 'true';
        
        let selectedStr = '';
        let rect = null;

        if (isTextarea) {
            if (activeEl.selectionStart !== activeEl.selectionEnd) {
                selectedStr = activeEl.value.substring(activeEl.selectionStart, activeEl.selectionEnd);
                rect = activeEl.getBoundingClientRect(); // Use textarea bounds for simplicity
                
                // Get the section ID from the textarea
                const sid = activeEl.dataset.id || (activeEl.closest('.report-section') ? activeEl.previousElementSibling.dataset.editId : null);
                if (sid) {
                    currentSectionId = parseInt(sid);
                } else {
                    currentSectionId = null;
                }
            }
        } else {
            const selection = window.getSelection();
            if (!selection.isCollapsed) {
                selectedStr = selection.toString();
                const range = selection.getRangeAt(0);
                const container = range.commonAncestorContainer;
                const node = container.nodeType === 3 ? container.parentNode : container;
                const previewPanel = document.getElementById('preview-panel');
                
                if (previewPanel && previewPanel.contains(node)) {
                    const sectionDiv = node.closest('.report-section');
                    if (sectionDiv && sectionDiv.dataset.sectionId) {
                        currentSectionId = parseInt(sectionDiv.dataset.sectionId);
                        rect = range.getBoundingClientRect();
                    }
                }
            }
        }

        if (selectedStr.trim() === '' || !rect || !currentSectionId) {
            toolbar.classList.add('ft-hidden');
            return;
        }

        lastSelectedText = selectedStr;

        if (!isWysiwyg) {
            const ta = document.querySelector('textarea[data-id="' + currentSectionId + '"]');
            if (ta) {
                const idx = ta.value.indexOf(lastSelectedText);
                if (idx !== -1) updateActiveButtons(ta.value, idx, lastSelectedText);
            }
        }

        const tbW = toolbar.offsetWidth || 300;
        const tbH = toolbar.offsetHeight || 42;
        let top  = rect.top - tbH - 10;
        let left = rect.left + rect.width / 2 - tbW / 2;

        if (top  < 8) top  = rect.bottom + 8; // If above screen, put below
        if (left < 8) left = 8;
        if (left + tbW > window.innerWidth - 8) left = window.innerWidth - tbW - 8;

        toolbar.style.top  = top  + 'px';
        toolbar.style.left = left + 'px';
        toolbar.classList.remove('ft-hidden');
    });

    const applyFormat = (fmt, prefix, suffix, val) => {
        if (!currentSectionId || !lastSelectedText) return;

        const activeEl = document.activeElement;
        const isWysiwyg = activeEl && activeEl.contentEditable === 'true';

        applyingFormat = true;

        if (isWysiwyg) {
            // Apply WYSIWYG DOM formatting directly
            if (fmt === 'bold') document.execCommand('bold');
            else if (fmt === 'italic') document.execCommand('italic');
            else if (fmt === 'strikethrough') document.execCommand('strikeThrough');
            else if (fmt === 'underline') document.execCommand('underline');
            else if (fmt === 'highlight') {
                document.execCommand('hiliteColor', false, 'rgba(254,243,0,0.2)');
            }
            else if (fmt === 'color') {
                document.execCommand('foreColor', false, val);
            }
            else if (fmt === 'size-up') {
                document.execCommand('fontSize', false, '4'); // Not perfect but works for simple bump
            }
            else if (fmt === 'size-down') {
                document.execCommand('fontSize', false, '2');
            }
            
            // Force Turndown to sync the new HTML to markdown state
            activeEl.dispatchEvent(new Event('input', { bubbles: true }));
        } 
        else {
            // Standard raw markdown injection for left panel textareas
            const ta = document.querySelector('textarea[data-id="' + currentSectionId + '"]');
            if (ta) {
                const md  = ta.value;
                const idx = md.indexOf(lastSelectedText);
                if (idx !== -1) {
                    const before = md.substring(0, idx);
                    const after  = md.substring(idx + lastSelectedText.length);

                    // Toggle: already wrapped → remove, otherwise add
                    if (before.endsWith(prefix) && after.startsWith(suffix)) {
                        ta.value = before.slice(0, -prefix.length) + lastSelectedText + after.slice(suffix.length);
                    } else {
                        ta.value = before + prefix + lastSelectedText + suffix + after;
                    }

                    const section = ReportForge.state.sections.find(s => s.id === currentSectionId);
                    if (section) {
                        section.content = ta.value;
                        ReportForge.renderBuilder();
                        ReportForge.renderReport();
                    }

                    const newIdx = ta.value.indexOf(lastSelectedText);
                    if (newIdx !== -1) updateActiveButtons(ta.value, newIdx, lastSelectedText);
                }
            }
        }

        setTimeout(() => { applyingFormat = false; }, 250);
    };

    document.querySelectorAll('.ft-btn').forEach(btn => {
        btn.addEventListener('mousedown', e => { e.preventDefault(); e.stopPropagation(); });
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const fmt = btn.dataset.fmt;
            const m = fmtMap[fmt];
            if (m) applyFormat(fmt, m.p, m.s);
        });
    });

    if (colorPicker) {
        colorPicker.addEventListener('change', e => {
            applyFormat('color', '<span style="color:' + e.target.value + '">', '</span>', e.target.value);
        });
    }
};

setTimeout(ReportForge.initFloatingToolbar, 500);
setTimeout(ReportForge.initDirectEdit, 500);
