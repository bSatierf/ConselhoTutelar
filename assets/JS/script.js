const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.navBar');
const navLinks = document.querySelectorAll('.navBar a');
const icon = menuToggle.querySelector('.menu-toggle i');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');

  if (navBar.classList.contains('active')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    icon.classList.replace('fa-times', 'fa-bars');
  });
});

const themes = ['default', 'azul', 'terra', 'dark'];
let currentThemeIndex = 0;
const themeBtn = document.getElementById('theme-switcher');

themeBtn.addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  localStorage.setItem("theme", newTheme);

  if (newTheme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', newTheme);
  }
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "default") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  currentThemeIndex = themes.indexOf(savedTheme);
}
