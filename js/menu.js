// ============================================
// Dynamic Navigation Menu
// ============================================

(function() {
  const menuData = {
    cpp: {
      title: 'Лекції C++',
      icon: '💻',
      color: '#00f0ff',
      items: [
        { num: 1, title: 'Вступ до C++ та історія мови', file: 'lectures/lecture1.html' },
        { num: 2, title: 'Налаштування середовища розробки', file: 'lectures/lecture2.html' },
        { num: 3, title: 'Структура програми на C++', file: 'lectures/lecture3.html' },
        { num: 4, title: 'Змінні, типи даних та константи', file: 'lectures/lecture4.html' },
        { num: 5, title: 'Оператори введення/виведення', file: 'lectures/lecture5.html' },
        { num: 6, title: 'Арифметичні оператори', file: 'lectures/lecture6.html' },
        { num: 7, title: 'Оператори порівняння та логічні', file: 'lectures/lecture7.html' },
        { num: 8, title: 'Умовний оператор if-else', file: 'lectures/lecture8.html' },
        { num: 9, title: 'Оператор множинного вибору switch', file: 'lectures/lecture9.html' },
        { num: 10, title: 'Тернарний оператор', file: 'lectures/lecture10.html' },
        { num: 11, title: 'Цикл for', file: 'lectures/lecture11.html' },
        { num: 12, title: 'Цикл while та do-while', file: 'lectures/lecture12.html' },
        { num: 13, title: 'Вкладені цикли', file: 'lectures/lecture13.html' },
        { num: 14, title: 'Оператори break та continue', file: 'lectures/lecture14.html' },
        { num: 15, title: 'Функції: оголошення та виклик', file: 'lectures/lecture15.html' },
        { num: 16, title: 'Параметри функцій та return', file: 'lectures/lecture16.html' },
        { num: 17, title: 'Перевантаження функцій', file: 'lectures/lecture17.html' },
        { num: 18, title: 'Рекурсивні функції', file: 'lectures/lecture18.html' },
        { num: 19, title: 'Масиви: одновимірні', file: 'lectures/lecture19.html' },
        { num: 20, title: 'Масиви: багатовимірні', file: 'lectures/lecture20.html' },
        { num: 21, title: 'Рядки (C-style та string)', file: 'lectures/lecture21.html' },
        { num: 22, title: 'Вказівники: основи', file: 'lectures/lecture22.html' },
        { num: 23, title: 'Арифметика вказівників', file: 'lectures/lecture23.html' },
        { num: 24, title: 'Вказівники та масиви', file: 'lectures/lecture24.html' },
        { num: 25, title: 'Динамічна пам\'ять: new та delete', file: 'lectures/lecture25.html' },
        { num: 26, title: 'Посилання (references)', file: 'lectures/lecture26.html' },
        { num: 27, title: 'Структури (struct)', file: 'lectures/lecture27.html' },
        { num: 28, title: 'Об\'єднання (union) та переліки (enum)', file: 'lectures/lecture28.html' },
        { num: 29, title: 'Вступ до ООП: класи та об\'єкти', file: 'lectures/lecture29.html' },
        { num: 30, title: 'Конструктори та деструктори', file: 'lectures/lecture30.html' },
        { num: 31, title: 'Інкапсуляція: модифікатори доступу', file: 'lectures/lecture31.html' },
        { num: 32, title: 'Геттери та сеттери', file: 'lectures/lecture32.html' },
        { num: 33, title: 'Статичні члени класу', file: 'lectures/lecture33.html' },
        { num: 34, title: 'Дружні функції та класи', file: 'lectures/lecture34.html' },
        { num: 35, title: 'Наслідування: основи', file: 'lectures/lecture35.html' },
        { num: 36, title: 'Типи наслідування', file: 'lectures/lecture36.html' },
        { num: 37, title: 'Поліморфізм та віртуальні функції', file: 'lectures/lecture37.html' },
        { num: 38, title: 'Абстрактні класи', file: 'lectures/lecture38.html' },
        { num: 39, title: 'Перевантаження операторів', file: 'lectures/lecture39.html' },
        { num: 40, title: 'Шаблони функцій (templates)', file: 'lectures/lecture40.html' },
        { num: 41, title: 'Шаблони класів', file: 'lectures/lecture41.html' },
        { num: 42, title: 'Обробка винятків (exceptions)', file: 'lectures/lecture42.html' },
        { num: 43, title: 'STL: Вектори (vector)', file: 'lectures/lecture43.html' },
        { num: 44, title: 'STL: Списки (list) та деки (deque)', file: 'lectures/lecture44.html' },
        { num: 45, title: 'STL: Стеки (stack) та черги (queue)', file: 'lectures/lecture45.html' },
        { num: 46, title: 'STL: Множини (set) та мапи (map)', file: 'lectures/lecture46.html' },
        { num: 47, title: 'STL: Алгоритми', file: 'lectures/lecture47.html' },
        { num: 48, title: 'Файли: читання та запис', file: 'lectures/lecture48.html' },
        { num: 49, title: 'Препроцесор та директиви', file: 'lectures/lecture49.html' },
        { num: 50, title: 'Простори імен (namespaces)', file: 'lectures/lecture50.html' },
        { num: 51, title: 'Лямбда-функції', file: 'lectures/lecture51.html' },
        { num: 52, title: 'Рухома семантика та rvalue', file: 'lectures/lecture52.html' },
        { num: 53, title: 'Розумні вказівники (smart pointers)', file: 'lectures/lecture53.html' },
        { num: 54, title: 'Багатопоточність: thread', file: 'lectures/lecture54.html' },
        { num: 55, title: 'Синхронізація потоків', file: 'lectures/lecture55.html' },
        { num: 56, title: 'Мережеве програмування', file: 'lectures/lecture56.html' },
        { num: 57, title: 'Регулярні вирази', file: 'lectures/lecture57.html' },
        { num: 58, title: 'Час та дата в C++', file: 'lectures/lecture58.html' },
        { num: 59, title: 'Випадкові числа', file: 'lectures/lecture59.html' },
        { num: 60, title: 'Патерни проєктування GoF', file: 'lectures/lecture60.html' }
      ]
    },
    winforms: {
      title: 'Windows Forms',
      icon: '🪟',
      color: '#00ff88',
      items: [
        { num: 1, title: 'Вступ до Windows Forms', file: 'winforms/lecture1.html' },
        { num: 2, title: 'Створення першої форми', file: 'winforms/lecture2.html' },
        { num: 3, title: 'Кнопки та обробка подій Click', file: 'winforms/lecture3.html' },
        { num: 4, title: 'Текстові поля TextBox та RichTextBox', file: 'winforms/lecture4.html' },
        { num: 5, title: 'Мітки Label та LinkLabel', file: 'winforms/lecture5.html' },
        { num: 6, title: 'Прапорці CheckBox', file: 'winforms/lecture6.html' },
        { num: 7, title: 'Перемикачі RadioButton', file: 'winforms/lecture7.html' },
        { num: 8, title: 'Списки ListBox та ComboBox', file: 'winforms/lecture8.html' },
        { num: 9, title: 'Числовий вибір NumericUpDown', file: 'winforms/lecture9.html' },
        { num: 10, title: 'Панелі Panel та GroupBox', file: 'winforms/lecture10.html' },
        { num: 11, title: 'Вкладки TabControl', file: 'winforms/lecture11.html' },
        { num: 12, title: 'Дерево TreeView', file: 'winforms/lecture12.html' },
        { num: 13, title: 'Таблиця ListView', file: 'winforms/lecture13.html' },
        { num: 14, title: 'DataGridView для даних', file: 'winforms/lecture14.html' },
        { num: 15, title: 'Меню MenuStrip', file: 'winforms/lecture15.html' },
        { num: 16, title: 'Контекстне меню ContextMenuStrip', file: 'winforms/lecture16.html' },
        { num: 17, title: 'Панель інструментів ToolStrip', file: 'winforms/lecture17.html' },
        { num: 18, title: 'Рядок стану StatusStrip', file: 'winforms/lecture18.html' },
        { num: 19, title: 'Діалоги: OpenFileDialog та SaveFileDialog', file: 'winforms/lecture19.html' },
        { num: 20, title: 'Діалоги: ColorDialog та FontDialog', file: 'winforms/lecture20.html' },
        { num: 21, title: 'Діалог MessageBox', file: 'winforms/lecture21.html' },
        { num: 22, title: 'Таймер Timer', file: 'winforms/lecture22.html' },
        { num: 23, title: 'Прогрес-бар ProgressBar', file: 'winforms/lecture23.html' },
        { num: 24, title: 'Повзунок TrackBar', file: 'winforms/lecture24.html' },
        { num: 25, title: 'Календар MonthCalendar та DateTimePicker', file: 'winforms/lecture25.html' },
        { num: 26, title: 'Малювання на формі: Graphics', file: 'winforms/lecture26.html' },
        { num: 27, title: 'Pen та Brush: лінії та заливка', file: 'winforms/lecture27.html' },
        { num: 28, title: 'Малювання фігур', file: 'winforms/lecture28.html' },
        { num: 29, title: 'Події миші', file: 'winforms/lecture29.html' },
        { num: 30, title: 'Події клавіатури', file: 'winforms/lecture30.html' },
        { num: 31, title: 'Drag and Drop', file: 'winforms/lecture31.html' },
        { num: 32, title: 'MDI інтерфейс', file: 'winforms/lecture32.html' },
        { num: 33, title: 'Форми: власні діалоги', file: 'winforms/lecture33.html' },
        { num: 34, title: 'Робота з файлами в WinForms', file: 'winforms/lecture34.html' },
        { num: 35, title: 'Бази даних: підключення', file: 'winforms/lecture35.html' },
        { num: 36, title: 'DataSet та DataAdapter', file: 'winforms/lecture36.html' },
        { num: 37, title: 'Прив\'язка даних (Data Binding)', file: 'winforms/lecture37.html' },
        { num: 38, title: 'Звітність: ReportViewer', file: 'winforms/lecture38.html' },
        { num: 39, title: 'Друк: PrintDocument', file: 'winforms/lecture39.html' },
        { num: 40, title: 'Chart: діаграми та графіки', file: 'winforms/lecture40.html' },
        { num: 41, title: 'BackgroundWorker', file: 'winforms/lecture41.html' },
        { num: 42, title: 'Потоки в WinForms', file: 'winforms/lecture42.html' },
        { num: 43, title: 'NotifyIcon: іконка в треї', file: 'winforms/lecture43.html' },
        { num: 44, title: 'WebBrowser/WebView2 компонент', file: 'winforms/lecture44.html' },
        { num: 45, title: 'Калькулятор: практичний проєкт', file: 'winforms/lecture45.html' },
        { num: 46, title: 'Текстовий редактор: практичний проєкт', file: 'winforms/lecture46.html' },
        { num: 47, title: 'Файловий менеджер: практичний проєкт', file: 'winforms/lecture47.html' },
        { num: 48, title: 'Медіа-плеєр: практичний проєкт', file: 'winforms/lecture48.html' },
        { num: 49, title: 'Гра "Хрестики-нулики": проєкт', file: 'winforms/lecture49.html' },
        { num: 50, title: 'Гра "Змійка": практичний проєкт', file: 'winforms/lecture50.html' },
        { num: 51, title: 'Графічний редактор: проєкт', file: 'winforms/lecture51.html' },
        { num: 52, title: 'Браузер: практичний проєкт', file: 'winforms/lecture52.html' },
        { num: 53, title: 'Чат-додаток: мережева програма', file: 'winforms/lecture53.html' },
        { num: 54, title: 'База даних студентів: проєкт', file: 'winforms/lecture54.html' },
        { num: 55, title: 'Система управління бібліотекою', file: 'winforms/lecture55.html' }
      ]
    }
  };

  let isMenuOpen = false;

  function buildMenuHTML() {
    let html = '<div class="menu-overlay" id="menuOverlay" onclick="closeMenu()"></div>';
    html += '<div class="menu-panel" id="menuPanel">';
    html += '<div class="menu-header">';
    html += '<span class="menu-title">📚 Навігація</span>';
    html += '<button class="menu-close" onclick="closeMenu()">✕</button>';
    html += '</div>';

    // C++ Lectures
    html += '<div class="menu-section">';
    html += '<div class="menu-section-title" style="color:#00f0ff">💻 Лекції C++</div>';
    html += '<ul class="menu-list">';
    menuData.cpp.items.forEach(item => {
      const isCurrent = window.location.href.includes(item.file);
      html += `<li><a href="${item.file}" class="${isCurrent ? 'current' : ''}" ${isCurrent ? '' : 'onclick="closeMenu()"'}>№${item.num}. ${item.title}</a></li>`;
    });
    html += '</ul></div>';

    // Windows Forms
    html += '<div class="menu-section">';
    html += '<div class="menu-section-title" style="color:#00ff88">🪟 Windows Forms</div>';
    html += '<ul class="menu-list">';
    menuData.winforms.items.forEach(item => {
      const isCurrent = window.location.href.includes(item.file);
      html += `<li><a href="${item.file}" class="${isCurrent ? 'current' : ''}" ${isCurrent ? '' : 'onclick="closeMenu()"'}>№${item.num}. ${item.title}</a></li>`;
    });
    html += '</ul></div>';

    html += '</div>';
    return html;
  }

  function openMenu() {
    if (!document.getElementById('menuOverlay')) {
      const container = document.createElement('div');
      container.id = 'dynamicMenuContainer';
      container.innerHTML = buildMenuHTML();
      document.body.appendChild(container);
    }

    requestAnimationFrame(() => {
      document.getElementById('menuOverlay').classList.add('active');
      document.getElementById('menuPanel').classList.add('active');
    });
    isMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const overlay = document.getElementById('menuOverlay');
    const panel = document.getElementById('menuPanel');
    if (overlay) overlay.classList.remove('active');
    if (panel) panel.classList.remove('active');
    isMenuOpen = false;
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  // Expose to global scope
  window.openMenu = openMenu;
  window.closeMenu = closeMenu;
  window.toggleMenu = toggleMenu;
  window.menuData = menuData;
})();
