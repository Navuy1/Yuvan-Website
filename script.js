// Intersection Observer for scroll animations
const animatedEls = document.querySelectorAll(
  '.timeline-card, .project-card, .skill-group, .edu-card'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animatedEls.forEach((el) => observer.observe(el));

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 80) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent2)' : '';
  });
});
