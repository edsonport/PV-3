/* =========================================
   EDSON PORTO BRAZ ADVOCACIA
   Landing Page — JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ── */
  const cursor = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hide cursor on leave
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  }

  /* ── Header Scroll ── */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Sticky WhatsApp ── */
  const stickyWa = document.querySelector('.sticky-wa');
  window.addEventListener('scroll', () => {
    stickyWa.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* ── Reveal on Scroll (IntersectionObserver) ── */
  const reveals = document.querySelectorAll('.reveal');
  const steps = document.querySelectorAll('.step');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));
  steps.forEach(el => revealObserver.observe(el));

  /* ── Counter Animation ── */
  function animateCounter(el, target, suffix = '', duration = 1800) {
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;

      el.textContent = isDecimal
        ? value.toFixed(1) + suffix
        : Math.floor(value) + suffix;

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(update);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    el.textContent = '0' + (el.dataset.suffix || '');
    statObserver.observe(el);
  });

  /* ── FAQ Accordion ── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── WhatsApp Link Builder ── */
  const PHONE = '5551999999999'; // TODO: trocar pelo número real
  const MESSAGE = encodeURIComponent(
    'Olá, Dr. Edson! Trabalhei sem carteira assinada e gostaria de uma consulta para avaliar meus direitos.'
  );
  const WA_LINK = `https://wa.me/${PHONE}?text=${MESSAGE}`;

  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = WA_LINK;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  /* ── Parallax Hero Lines ── */
  const heroLines = document.querySelector('.hero-lines');
  if (heroLines) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroLines.style.transform = `translateY(${scrolled * 0.25}px)`;
    }, { passive: true });
  }

  /* ── Gold shimmer on section labels hover ── */
  document.querySelectorAll('.section-label').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.letterSpacing = '0.35em';
    });
    el.addEventListener('mouseleave', () => {
      el.style.letterSpacing = '';
    });
  });

});
