// Sticky navbar using JS
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 0) {
    navbar.classList.add('js-sticky');
  } else {
    navbar.classList.remove('js-sticky');
  }
});



// Scroll to steel, zinc, iron sections when their tabs are clicked
const categoryTabs = document.querySelectorAll('.tab');
const categoryIds = ['categories', 'buy-steel', 'buy-zinc', 'buy-iron'];
categoryTabs.forEach((tab, idx) => {
  tab.addEventListener('click', function () {
    const targetId = categoryIds[idx];
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
