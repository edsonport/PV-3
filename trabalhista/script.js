/**
 * EDSON PORTO ADVOCACIA - DIREITO TRABALHISTA
 * JavaScript for interactivity and functionality
 */

// WhatsApp Configuration
const WHATSAPP_NUMBER = '5551993615313';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de uma análise gratuita sobre meu caso trabalhista.';

/**
 * Open WhatsApp conversation
 */
function openWhatsApp() {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

/**
 * Toggle FAQ items
 */
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = answer.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer.active').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current item
    if (isActive) {
        answer.classList.remove('active');
        element.classList.remove('active');
    } else {
        answer.classList.add('active');
        element.classList.add('active');
    }
}

/**
 * Smooth scroll to sections
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add scroll effect to header
 */
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/**
 * Animate elements on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.challenge-card, .differential-card, .testimonial-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/**
 * Form handling (if needed in future)
 */
function handleFormSubmit(event) {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
}

/**
 * Mobile menu toggle (if needed in future)
 */
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

/**
 * Initialize page
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Edson Porto Advocacia - Direito Trabalhista loaded');
    
    // Add any initialization code here
    // Example: Load analytics, initialize third-party services, etc.
});

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', function(event) {
    // Alt + W to open WhatsApp
    if (event.altKey && event.key === 'w') {
        openWhatsApp();
    }
});
