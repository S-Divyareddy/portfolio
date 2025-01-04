document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset = 70; // Adjust this value to match your header's height
        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Show/hide project details on hover
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.project-front').style.opacity = '0';
      card.querySelector('.project-back').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-front').style.opacity = '1';
      card.querySelector('.project-back').style.opacity = '0';
    });
  });

  // Close the dropdown menu when clicking anywhere on the document
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbarCollapse.contains(event.target);
    const isTogglerClicked = navbarToggler.contains(event.target);

    if (!isClickInsideNavbar && !isTogglerClicked && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Trigger the collapse functionality
    }
  });


  // Highlight active navigation link
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  });
});
