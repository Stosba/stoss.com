// JavaScript pour les interactions et animations de la page STOSS

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initSmoothScrolling();
});

// Dark mode :
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
    // Basculer le mode sombre
    document.body.classList.toggle('dark-mode');
    
    // Appliquer à toutes les sections principales
    document.querySelectorAll('section, .header, .footer, .container, .card').forEach(el => {
        el.classList.toggle('dark-mode');
    });
    
    // Changer l'icône
    const icon = toggleButton.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        toggleButton.title = "Mode Clair";
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        toggleButton.title = "Mode Sombre";
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Appliquer le mode au chargement si activé précédemment
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('section, .header, .footer, .container, .card').forEach(el => {
        el.classList.add('dark-mode');
    });
}

// Navigation mobile
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animation hamburger
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.transform = navMenu.classList.contains('active') 
                ? `rotate(${index === 0 ? 45 : index === 1 ? -45 : 0}deg) translate(${index === 1 ? '0px' : '0px'}, ${index === 0 ? '9px' : index === 1 ? '-9px' : '0px'})`
                : 'none';
            bar.style.opacity = index === 1 && navMenu.classList.contains('active') ? '0' : '1';
        });
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Navbar transparente/opaque selon le scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(32, 178, 170, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(32, 178, 170, 0.1)';
        }
    });
}

// Effets de scroll et animations
function initScrollEffects() {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                
                // Animations spéciales pour certains éléments
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('service-card')) {
                    animateCard(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.service-card, .stat-item, .contact-form, .contact-info');
    elementsToAnimate.forEach(el => observer.observe(el));

     // Effet de parallaxe pour les motifs
     window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            const speed = 0.2;
            const yPos = -(scrolled * speed);
            hero.style.backgroundPosition = `center ${yPos}px`;
        }
    });
}

// Animations spécifiques
function initAnimations() {
    // Animation des icônes flottantes
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
        
        // Effet hover sur les icônes
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation du texte gradient
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.animationDuration = '1s';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.animationDuration = '3s';
        });
    });
}

// Animation des compteurs
function animateCounter(element) {
    const targetValue = parseInt(element.textContent);
    const duration = 2000; // 2 secondes
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Fonction d'easing pour un effet plus naturel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(targetValue * easeOutQuart);
        
        element.textContent = currentValue + (element.textContent.includes('+') ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.textContent.includes('24/7') ? '24/7' : targetValue + (element.textContent.includes('%') ? '%' : '+');
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Animation des cartes de service
function animateCard(card) {
    const delay = Array.from(card.parentNode.children).indexOf(card) * 200;
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.6s ease';
    }, delay);
}

// Formulaire de contact
function initContactForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Validation en temps réel
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showSuccessMessage();
            form.reset();
        }
    });
}

// Validation des champs
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Retirer les erreurs précédentes
    clearFieldError(field);
    
    // Validation selon le type de champ
    switch(field.type) {
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (!isValid) showFieldError(field, 'Email invalide');
            break;
        case 'text':
            isValid = value.length >= 2;
            if (!isValid) showFieldError(field, 'Minimum 2 caractères');
            break;
        case 'textarea':
            isValid = value.length >= 10;
            if (!isValid) showFieldError(field, 'Minimum 10 caractères');
            break;
        case 'select-one':
            isValid = value !== '';
            if (!isValid) showFieldError(field, 'Veuillez choisir une option');
            break;
    }
    
    return isValid;
}

// Validation complète du formulaire
function validateForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Afficher erreur de champ
function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '0.25rem';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

// Supprimer erreur de champ
function clearFieldError(field) {
    field.style.borderColor = '#e0f2f1';
    
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// Message de succès
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
        background: linear-gradient(135deg, #20b2aa, #48d1cc);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
        animation: fadeIn 0.5s ease;
    `;
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Merci ! Votre message a été envoyé avec succès.
    `;
    
    form.insertBefore(successMessage, form.firstChild);
    
    // Retirer le message après 5 secondes
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Scroll fluide
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Effets de parallaxe légers
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-graphic');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Optimisation des performances
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

// Appliquer le debounce aux événements de scroll
const debouncedScroll = debounce(function() {
    // Fonctions de scroll optimisées
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Préchargement des images
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageUrl = img.src;
        const image = new Image();
        image.src = imageUrl;
    });
}

// Initialiser le préchargement
preloadImages();

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Service Worker pour le cache (optionnel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}

// Utilitaires
const Utils = {
    // Vérifier si un élément est visible
    isElementInViewport: function(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Obtenir la position d'un élément
    getElementPosition: function(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + window.scrollX,
            y: rect.top + window.scrollY
        };
    },
    
    // Générer un ID unique
    generateId: function() {
        return Math.random().toString(36).substr(2, 9);
    }
};

// Exporter les utilitaires pour une utilisation externe
window.StossUtils = Utils; 