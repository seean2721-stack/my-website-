// ==============================
// Smooth Scroll for Navbar Links
// ==============================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ==============================
// Navbar Shadow on Scroll
// ==============================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg', 'bg-dark');
  } else {
    navbar.classList.remove('shadow-lg', 'bg-dark');
  }
});

// ==============================
// Skills Toggle with Smooth Slide
// ==============================
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    // If this card is already active, close it
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      card.querySelector('.skill-detail').style.maxHeight = null;
      return;
    }

    // Close all other skill cards
    document.querySelectorAll('.skill-card').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.skill-detail').style.maxHeight = null;
    });

    // Open this card
    card.classList.add('active');
    const detail = card.querySelector('.skill-detail');
    detail.style.maxHeight = detail.scrollHeight + "px";
  });
});

// ==============================
// Optional: Smooth animation on page load for all active skill details
// ==============================
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-card.active .skill-detail').forEach(detail => {
    detail.style.maxHeight = detail.scrollHeight + "px";
  });
});
