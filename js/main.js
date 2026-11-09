// DEDO CRIATIVO · JavaScript principal

// Menu mobile
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const toggle = document.querySelector('.menu-toggle');
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
}

// Fechar menu ao clicar em link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const nav = document.getElementById('mainNav');
      const toggle = document.querySelector('.menu-toggle');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.classList.remove('active');
      }
    });
  });

  // Filtro de projetos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Atualizar botões
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filtrar cards
      projectCards.forEach(card => {
        if (filter === 'todos' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Header com sombra ao rolar
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
