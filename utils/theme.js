const toggleEls = document.querySelectorAll('#themeToggle');

function setTheme(theme) {
  document.documentElement.setAttribute('theme', theme);
  localStorage.setItem('theme', theme);

  const emoji = theme === 'dark' ? '🌙' : '☀️';
  const title = "Lapeuchi's Devlog" + emoji;
  toggleEls.forEach(el => {
    el.textContent = title;
  });
}

toggleEls.forEach(el => {
  el.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
});

// 초기 적용
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);
