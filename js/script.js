// Apple-style smooth animations and interactions

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 0) {
            navbar.style.background = 'rgba(167, 143, 143, 0.9)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animations to sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section-featured, .section-services, .section-portfolio, .section-cta');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.28, 0.11, 0.32, 1)';
        observer.observe(el);
    });
});

// Stats counter animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        let currentValue = 0;
        const increment = numericValue / 60;
        const suffix = finalValue.includes('%') ? '%' : (finalValue.includes('+') ? '+' : '');
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                stat.textContent = numericValue + suffix;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(currentValue) + suffix;
            }
        }, 5);
    });
}

// Trigger stats animation when stats section is visible
const statsSection = document.querySelector('.section-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02) translateY(-4px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.08)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Button press effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        const rate = scrolled * 0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Apple-style page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-headline, .hero-subhead, .hero-cta, .hero-visual');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200 + 200);
    });
});

// Image lazy loading with smooth fade-in
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// Smooth page transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Create Apple-style transition overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.4s cubic-bezier(0.28, 0.11, 0.32, 1);
                pointer-events: none;
            `;
            document.body.appendChild(overlay);
            
            // Fade out current content
            document.body.style.opacity = '0.8';
            
            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        });
    });
}

// Enhanced scroll reveal with stagger effect
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item');
    
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s cubic-bezier(0.28, 0.11, 0.32, 1) ${index * 0.1}s`;
    });
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// Apple-style form interactions (for future contact forms)
function initFormInteractions() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 0 0 4px rgba(0, 113, 227, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Responsive navigation for mobile (Apple-style)
function initMobileNav() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 834) {
        // Add mobile menu button
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            background: none;
            border: none;
            font-size: 18px;
            color: var(--text-dark);
            cursor: pointer;
            display: block;
        `;
        
        navbar.querySelector('.nav-container').appendChild(menuButton);
        
        // Hide nav links by default on mobile
        navLinks.style.display = 'none';
        
        menuButton.addEventListener('click', function() {
            if (navLinks.style.display === 'none') {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '44px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                this.innerHTML = '✕';
            } else {
                navLinks.style.display = 'none';
                this.innerHTML = '☰';
            }
        });
    }
}

// Performance optimization - reduce animations on slower devices
function optimizePerformance() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSlowDevice = navigator.hardwareConcurrency < 4;
    
    if (isReducedMotion || isSlowDevice) {
        // Disable complex animations
        document.documentElement.style.setProperty('--transition', 'none');
        
        // Remove transform animations
        const animatedElements = document.querySelectorAll('*');
        animatedElements.forEach(el => {
            el.style.transition = 'opacity 0.2s ease';
        });
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    initPageTransitions();
    initScrollReveal();
    initFormInteractions();
    initMobileNav();
    optimizePerformance();
    
    // Add subtle loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize mobile nav if needed
    if (window.innerWidth > 834) {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.flexDirection = 'row';
        navLinks.style.background = 'none';
        navLinks.style.padding = '0';
        navLinks.style.boxShadow = 'none';
        
        const menuButton = document.querySelector('.nav-container button');
        if (menuButton) {
            menuButton.remove();
        }
    }
});

// Add smooth momentum scrolling for iOS
document.documentElement.style.webkitOverflowScrolling = 'touch';

// Preload critical images for better performance
function preloadCriticalImages() {
    const criticalImages = [
        'images/hero-render.jpg',
        'images/featured-project.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
window.addEventListener('load', preloadCriticalImages);