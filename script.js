const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved mode
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

// Toggle on click
toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
