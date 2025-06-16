// Funcionalidade do FAQ (Accordion)
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle do item atual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// Smooth scroll para links internos
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

// Animações on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.pain-item, .solution-item, .step, .why-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Botão WhatsApp - Tracking de cliques (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aqui você pode adicionar tracking analytics se necessário
            console.log('WhatsApp button clicked');
            
            // Exemplo de tracking com Google Analytics (se implementado)
            // gtag('event', 'click', {
            //     event_category: 'WhatsApp',
            //     event_label: 'Contact Button'
            // });
        });
    });
});

// Efeito de parallax sutil no hero
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Otimização de performance para scroll
let ticking = false;

function updateScrollEffects() {
    // Aqui você pode adicionar outros efeitos de scroll se necessário
    ticking = false;
}

document.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Prevenção de spam no botão WhatsApp
let lastClickTime = 0;
const clickDelay = 2000; // 2 segundos

document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const currentTime = Date.now();
            
            if (currentTime - lastClickTime < clickDelay) {
                e.preventDefault();
                return false;
            }
            
            lastClickTime = currentTime;
        });
    });
});

// Lazy loading para imagens (se houver)
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

// Função para destacar seção ativa no scroll (se houver navegação)
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Adicionar listener para highlight de seção ativa
document.addEventListener('scroll', highlightActiveSection);

// Função para melhorar a acessibilidade
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar atributos ARIA para FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        answer.setAttribute('id', `faq-answer-${index}`);
        
        question.addEventListener('click', function() {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            question.setAttribute('aria-expanded', !isExpanded);
        });
    });
});

// Função para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamento do botão WhatsApp em mobile
document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.getElementById('whatsapp-float');
    
    if (isMobile() && whatsappFloat) {
        // Adicionar comportamento específico para mobile se necessário
        whatsappFloat.style.bottom = '20px';
        whatsappFloat.style.right = '20px';
    }
});

// Listener para redimensionamento da janela
window.addEventListener('resize', function() {
    // Reajustar elementos se necessário
    const whatsappFloat = document.getElementById('whatsapp-float');
    
    if (whatsappFloat) {
        if (isMobile()) {
            whatsappFloat.style.bottom = '20px';
            whatsappFloat.style.right = '20px';
        } else {
            whatsappFloat.style.bottom = '30px';
            whatsappFloat.style.right = '30px';
        }
    }
});

