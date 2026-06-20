// ============================================
// Task Solutions Toggle
// ============================================

(function() {
  window.toggleSolution = function(btn) {
    const content = btn.nextElementSibling;
    if (content && content.classList.contains('solution-content')) {
      content.classList.toggle('show');
      btn.textContent = content.classList.contains('show') ? '🔒 Приховати рішення' : '🔑 Показати рішення';
    }
  };
  
  // Auto-initialize all solution toggles on the page
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solution-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        toggleSolution(this);
      });
    });
  });
})();
