// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// WhatsApp floating button animation and tracking
document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    // Add click tracking for analytics (optional)
    whatsappFloat.addEventListener('click', function() {
        // You can add Google Analytics or other tracking here
        console.log('WhatsApp button clicked');
    });
    
    // Show/hide button based on scroll position
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Always show the button (as per requirements)
        whatsappFloat.style.opacity = '1';
        whatsappFloat.style.transform = 'translateY(0)';
        
        lastScrollTop = scrollTop;
    });
});

// Form validation (if contact form is added later)
function validateContactForm(form) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const message = form.querySelector('textarea[name="message"]');
    
    let isValid = true;
    
    // Clear previous error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Nome é obrigatório');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'E-mail é obrigatório');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'E-mail inválido');
        isValid = false;
    }
    
    // Validate phone
    const phoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (!phone.value.trim()) {
        showError(phone, 'Telefone é obrigatório');
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        showError(phone, 'Telefone inválido');
        isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Mensagem é obrigatória');
        isValid = false;
    }
    
    return isValid;
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#e74c3c';
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.problem-item, .differential-item, .testimonial-item, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number formatting
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    input.value = value;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2c5aa0;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'translateY(10px)';
        }
    });
});

// Performance optimization - Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Analytics tracking for CTA clicks
function trackCTAClick(ctaName) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'CTA',
            event_label: ctaName,
            value: 1
        });
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: ctaName
        });
    }
    
    console.log('CTA clicked:', ctaName);
}

// Add tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ctaText = this.textContent.trim();
            trackCTAClick(ctaText);
        });
    });
});

// Mobile menu toggle (if needed for future enhancements)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Prevent form submission without validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateContactForm(this)) {
                e.preventDefault();
                return false;
            }
        });
    });
});

// Cookie consent (optional for LGPD compliance)
function showCookieConsent() {
    const cookieConsent = document.createElement('div');
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <div class="cookie-content">
            <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.</p>
            <button onclick="acceptCookies()" class="btn-accept">Aceitar</button>
        </div>
    `;
    cookieConsent.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1e3d72;
        color: white;
        padding: 1rem;
        z-index: 1001;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(cookieConsent);
    
    setTimeout(() => {
        cookieConsent.style.transform = 'translateY(0)';
    }, 1000);
}

function acceptCookies() {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (cookieConsent) {
        cookieConsent.style.transform = 'translateY(100%)';
        setTimeout(() => {
            cookieConsent.remove();
        }, 300);
    }
    localStorage.setItem('cookiesAccepted', 'true');
}

// Show cookie consent if not already accepted
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(showCookieConsent, 2000);
    }
});

