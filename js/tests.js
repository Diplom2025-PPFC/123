// ============================================
// Test Engine
// ============================================

(function() {
  window.TestEngine = {
    currentTest: null,
    userAnswers: {},
    
    init: function(questions) {
      this.currentTest = questions;
      this.userAnswers = {};
      this.render(questions);
    },
    
    render: function(questions) {
      const container = document.getElementById('testContainer');
      if (!container) return;
      
      let html = '';
      questions.forEach((q, idx) => {
        html += '<div class="question-card" id="q' + idx + '">';
        html += '<span class="question-number">Питання ' + (idx + 1) + '</span>';
        html += '<div class="question-text">' + q.question + '</div>';
        html += '<div class="answers">';
        q.answers.forEach((ans, aIdx) => {
          html += '<button class="answer-option" onclick="TestEngine.selectAnswer(' + idx + ', ' + aIdx + ', this)">' + ans + '</button>';
        });
        html += '</div></div>';
      });
      
      html += '<div style="text-align:center;margin-top:30px;">';
      html += '<button class="nav-arrow" onclick="TestEngine.checkAnswers()" style="font-size:16px;padding:14px 40px;">✅ Перевірити відповіді</button>';
      html += '</div>';
      
      html += '<div id="testResults" style="display:none;"></div>';
      
      container.innerHTML = html;
    },
    
    selectAnswer: function(qIdx, aIdx, btn) {
      this.userAnswers[qIdx] = aIdx;
      const card = document.getElementById('q' + qIdx);
      card.querySelectorAll('.answer-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    },
    
    checkAnswers: function() {
      if (!this.currentTest) return;
      const answered = Object.keys(this.userAnswers).length;
      if (answered < this.currentTest.length) {
        const remaining = this.currentTest.length - answered;
        alert('⚠️ Ви відповіли на ' + answered + ' з ' + this.currentTest.length + ' питань. Залишилось ' + remaining + '.');
        return;
      }
      
      let correct = 0;
      this.currentTest.forEach((q, idx) => {
        const card = document.getElementById('q' + idx);
        const buttons = card.querySelectorAll('.answer-option');
        buttons.forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === q.correct) {
            b.classList.add('correct');
          } else if (bIdx === this.userAnswers[idx] && bIdx !== q.correct) {
            b.classList.add('incorrect');
          }
        });
        if (this.userAnswers[idx] === q.correct) correct++;
      });
      
      const percent = Math.round((correct / this.currentTest.length) * 100);
      let message = '';
      let color = '';
      if (percent >= 90) { message = '🏆 Відмінно! Ви експерт!'; color = 'var(--neon-green)'; }
      else if (percent >= 75) { message = '👍 Добре! Продовжуйте в тому ж дусі!'; color = 'var(--neon-cyan)'; }
      else if (percent >= 60) { message = '💪 Непогано, але є над чим працювати.'; color = 'var(--neon-yellow)'; }
      else { message = '📚 Потрібно більше практики. Перечитайте лекцію!'; color = '#ff0050'; }
      
      const resultsDiv = document.getElementById('testResults');
      resultsDiv.innerHTML = 
        '<div class="test-results">' +
        '<div class="result-score">' + correct + '/' + this.currentTest.length + '</div>';
      resultsDiv.style.display = 'block';
      resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };
})();
