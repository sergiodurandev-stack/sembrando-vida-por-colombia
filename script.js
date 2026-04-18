// Sticky nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.nav__mobile a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.service-card, .pillar, .contact-item, .about__text, .about__visual, ' +
  '.value-card, .wwd__item, .svc-row, .impact-card, .highlight, .fade-in'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// WhatsApp contact form (works for both index and contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = (document.getElementById('name')?.value    || '').trim();
    const phone   = (document.getElementById('phone')?.value   || '').trim();
    const email   = (document.getElementById('email')?.value   || '').trim();
    const service = (document.getElementById('service')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();

    let text = `Hola, mi nombre es *${name}*.`;
    if (phone)   text += `\nTeléfono: ${phone}`;
    if (email)   text += `\nCorreo: ${email}`;
    if (service) text += `\nServicio de interés: *${service}*`;
    if (message) text += `\n\nMensaje: ${message}`;
    else         text += `\n\nMe gustaría recibir información sobre sus servicios.`;

    window.open(`https://wa.me/573227402313?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
