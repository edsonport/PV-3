// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
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

// Smooth scrolling for anchor links (if any are added)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// WhatsApp Button Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    let isVisible = false;
    
    function toggleWhatsAppButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300 && !isVisible) {
            whatsappButton.style.opacity = '1';
            whatsappButton.style.transform = 'translateY(0)';
            isVisible = true;
        } else if (scrollTop <= 300 && isVisible) {
            whatsappButton.style.opacity = '0.8';
            whatsappButton.style.transform = 'translateY(10px)';
            isVisible = false;
        }
    }
    
    // Set initial styles
    whatsappButton.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    whatsappButton.style.opacity = '0.8';
    whatsappButton.style.transform = 'translateY(10px)';
    
    window.addEventListener('scroll', toggleWhatsAppButton);
    
    // Initial check
    toggleWhatsAppButton();
});

// Add loading animation for images (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Form validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Analytics tracking for CTA clicks (placeholder for future implementation)
function trackCTAClick(ctaType, ctaText) {
    // This function can be used to track CTA clicks with analytics tools
    console.log(`CTA clicked: ${ctaType} - ${ctaText}`);
    
    // Example for Google Analytics (if implemented):
    // gtag('event', 'click', {
    //     event_category: 'CTA',
    //     event_label: ctaType,
    //     value: ctaText
    // });
}

// Add click tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonType = this.classList.contains('primary') ? 'primary' : 'secondary';
            
            trackCTAClick(buttonType, buttonText);
        });
    });
});

// Intersection Observer for animations (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll('.problem-item, .solution-item, .differential-item, .testimonial-item, .step');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Performance optimization: Lazy loading for images (if images are added)
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

