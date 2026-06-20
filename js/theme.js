// ============================================
// Theme Switcher
// ============================================

(function() {
  const THEME_KEY = 'cpp-mastery-theme';
  
  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeIcon(theme);
  }
  
  function toggleTheme() {
    const current = getSavedTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }
  
  function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Світла тема' : 'Темна тема';
    }
  }
  
  // Initialize on load
  document.addEventListener('DOMContentLoaded', function() {
    setTheme(getSavedTheme());
    
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  });
  
  // Expose to global scope
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
})();
