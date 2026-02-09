/* ============================================
   EDSON PORTO BRAZ ADVOCACIA - VANILLA JS
   Interatividade pura sem dependências
   ============================================ */

// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
const mobileLinks = navMobile.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    
    // Animar hamburger
    const spans = menuToggle.querySelectorAll('span');
    if (navMobile.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(15px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-15px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fechar menu ao clicar em link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============================================
// SMOOTH SCROLL PARA ÂNCORAS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos com animação
document.querySelectorAll('.expertise-card, .area-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// COUNTER ANIMATION
// ============================================

const counterValues = document.querySelectorAll('.counter-value');
let countersStarted = false;

const startCounters = () => {
    if (countersStarted) return;
    countersStarted = true;
    
    counterValues.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
};

// Iniciar contadores quando seção fica visível
const countersSection = document.querySelector('.impact-counters');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterObserver.observe(countersSection);

// ============================================
// PARALLAX EFFECT (Discreto)
// ============================================

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrollTop < heroSection.offsetHeight) {
        heroImage.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
});

// ============================================
// HOVER EFFECTS PARA CARDS
// ============================================

const cards = document.querySelectorAll('.expertise-card, .area-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease-out';
    });
});

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SCROLL REVEAL PARA ELEMENTOS
// ============================================

const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
});

// ============================================
// ACTIVE NAV LINK BASED ON SCROLL
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// FORM VALIDATION (Se houver formulário)
// ============================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Aqui você poderia enviar dados via fetch
            console.log('Formulário válido');
        }
    });
});

// ============================================
// ANALYTICS TRACKING (Opcional)
// ============================================

// Rastrear cliques em CTAs
document.querySelectorAll('[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        if (window.gtag) {
            gtag('event', 'whatsapp_click', {
                'event_category': 'engagement',
                'event_label': 'WhatsApp CTA'
            });
        }
    });
});

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Edson Porto Braz Advocacia - Site carregado com sucesso');
    
    // Adicionar atributo data-reveal a elementos que devem ser revelados
    document.querySelectorAll('.hero-text, .hero-image').forEach(el => {
        el.setAttribute('data-reveal', 'true');
    });
});

// ============================================
// PERFORMANCE: Debounce para eventos de scroll
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce ao scroll
const debouncedScroll = debounce(() => {
    // Lógica de scroll aqui
}, 100);

window.addEventListener('scroll', debouncedScroll);
