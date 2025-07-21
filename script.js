// NullBaba Portfolio - Advanced JavaScript Animations and Interactions

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Immediate scroll to top before any other operations
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// Disable scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Ensure page starts at top on load
window.addEventListener('load', function() {
    console.log('🧘‍♂️ NullBaba: Page fully loaded, ensuring top position...');
    // Force scroll to top multiple times to ensure it sticks
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 10);
    
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 100);
});

// Handle page show events (back/forward navigation)
window.addEventListener('pageshow', function(event) {
    console.log('🧘‍♂️ NullBaba: Page show event, resetting position...');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    if (event.persisted) {
        console.log('🧘‍♂️ NullBaba: Page restored from cache, forcing top position...');
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 10);
    }
});

// Handle beforeunload to prevent scroll restoration
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🧘‍♂️ NullBaba: DOM loaded, initializing...');
    
    // Immediate scroll reset
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Prevent automatic scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    // Check if all sections exist
    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            console.log(`✅ Section found: ${id}`);
        } else {
            console.error(`❌ Section missing: ${id}`);
        }
    });
    
    // Check if navigation links exist
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log(`🔗 Found ${navLinks.length} navigation links`);
    
    initializeAnimations();
    initializeInteractions();
    initializeSmoothScroll();
    registerServiceWorker();
    
    // Force scroll to top after all initializations
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 50);
    
    // Initialize easter egg last
    setTimeout(() => {
        initializeEasterEgg();
    }, 200);
    
    // Final scroll position check
    setTimeout(() => {
        console.log('🧘‍♂️ NullBaba: Final scroll position check...');
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Remove loading class to enable smooth scrolling
        document.body.classList.remove('loading');
        console.log('🧘‍♂️ NullBaba: Initialization complete, smooth scrolling enabled');
        
        // Test navigation visibility
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        console.log(`🔗 Navigation test: nav element found: ${!!nav}`);
        console.log(`🔗 Navigation test: ${navLinks.length} nav links found`);
        
        // Test sections
        const sections = document.querySelectorAll('section[id]');
        console.log(`📄 Sections test: ${sections.length} sections found`);
        sections.forEach(section => {
            console.log(`📄 Section: ${section.id} - visible: ${section.offsetHeight > 0}`);
        });
    }, 500);
});

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {
            try {
                const registration = await navigator.serviceWorker.register('./sw.js');
                console.log('🧘‍♂️ NullBaba: Service Worker registered', registration);
                
                // Handle service worker updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content is available
                            showUpdateNotification();
                        }
                    });
                });
                
                // Listen for messages from service worker
                navigator.serviceWorker.addEventListener('message', (event) => {
                    if (event.data && event.data.type === 'CACHE_UPDATED') {
                        showNotification('New wisdom cached! 🧘‍♂️');
                    }
                });
                
            } catch (error) {
                console.error('🧘‍♂️ NullBaba: Service Worker registration failed', error);
            }
        });
    }
}

// Show update notification
function showUpdateNotification() {
    const updateDiv = document.createElement('div');
    updateDiv.className = 'fixed top-4 left-4 right-4 bg-cosmic-glow text-white p-4 rounded-lg shadow-lg z-50 flex items-center justify-between';
    updateDiv.innerHTML = `
        <div>
            <h4 class="font-bold">New wisdom available! 🧘‍♂️</h4>
            <p class="text-sm opacity-90">Click to update to the latest version</p>
        </div>
        <button id="update-btn" class="bg-white text-cosmic-glow px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
            Update
        </button>
    `;
    
    document.body.appendChild(updateDiv);
    
    document.getElementById('update-btn').addEventListener('click', () => {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
        }
        window.location.reload();
    });
}

// Main Animation Timeline
function initializeAnimations() {
    // Page load ripple animation
    const ripple = document.createElement('div');
    ripple.className = 'fixed inset-0 bg-cosmic-glow opacity-20 rounded-full animate-ripple pointer-events-none z-50';
    ripple.style.transform = 'scale(0)';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.stars', {
            opacity: 0,
            duration: 2,
            ease: 'power2.out'
        })
        .from('nav', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=1.5')
        .from('.animate-float', {
            scale: 0,
            rotation: 360,
            duration: 1.5,
            ease: 'back.out(1.7)'
        }, '-=1')
        .from('.orbital', {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out'
        }, '-=0.5')
        .from('h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .from('.typewriter-text', {
            width: 0,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=0.5')
        .from('#download-scroll', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.scroll-indicator', {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5');
    
    // Scroll-triggered animations
    gsap.utils.toArray('.monk-card').forEach(card => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Project cards staggered animation
    gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Skill bars animation
    gsap.utils.toArray('.bg-cosmic-glow').forEach(bar => {
        const width = bar.style.width;
        gsap.set(bar, { width: 0 });
        
        gsap.to(bar, {
            width: width,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Parallax effect for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.to(section, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
    
    // Floating animation for various elements
    gsap.utils.toArray('.animate-float').forEach(element => {
        gsap.to(element, {
            y: -20,
            duration: 3,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
    });
}

// Interactive Elements
function initializeInteractions() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            console.log('🔗 Mobile menu toggled');
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                console.log('🔗 Mobile menu closed');
            });
        });
    }
    
    // Download resume functionality
    const downloadButton = document.getElementById('download-scroll');
    downloadButton.addEventListener('click', () => {
        // Create download link
        const link = document.createElement('a');
        link.href = 'Akash_Resume1 (1).pdf';
        link.download = 'NullBaba_Sacred_Scroll.pdf';
        link.click();
        
        // Animation feedback
        gsap.to(downloadButton, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });
        
        // Show success message
        showNotification('Sacred scroll downloaded! 📜');
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate form submission
        gsap.to(contactForm, {
            scale: 0.98,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
        });
        
        // Show success message
        showNotification('Message sent to NullBaba! 🧘‍♂️');
        
        // Reset form
        contactForm.reset();
    });
    
    // Shrine input focus effects
    const shrineInputs = document.querySelectorAll('.shrine-input');
    shrineInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                rotationY: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-cosmic-glow');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-cosmic-glow');
            }
        });
    });
}

// Easter Egg - Ctrl+Alt+N
function initializeEasterEgg() {
    const easterEgg = document.getElementById('easter-egg');
    const closeButton = document.getElementById('close-easter-egg');
    const hiddenQuote = document.querySelector('.hidden-quote');
    
    let keysPressed = {};
    
    document.addEventListener('keydown', (e) => {
        keysPressed[e.key] = true;
        
        if (keysPressed['Control'] && keysPressed['Alt'] && keysPressed['n']) {
            showEasterEgg();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keysPressed[e.key] = false;
    });
    
    function showEasterEgg() {
        easterEgg.classList.remove('hidden');
        
        // Play chant sound (optional - can be added)
        // const audio = new Audio('chant.mp3');
        // audio.play();
        
        // Animate quote
        setTimeout(() => {
            hiddenQuote.classList.add('show');
        }, 300);
        
        // Cosmic pulse background
        gsap.to(easterEgg, {
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            duration: 1,
            yoyo: true,
            repeat: 3,
            ease: 'power2.inOut'
        });
    }
    
    closeButton.addEventListener('click', () => {
        easterEgg.classList.add('hidden');
        hiddenQuote.classList.remove('show');
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            easterEgg.classList.add('hidden');
            hiddenQuote.classList.remove('show');
        }
    });
}

// Smooth scroll navigation
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log(`🔗 Initializing smooth scroll for ${navLinks.length} links`);
    
    navLinks.forEach(link => {
        console.log(`🔗 Adding listener to link: ${link.getAttribute('href')}`);
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            console.log(`🎯 Clicking link to: ${targetId}`);
            
            if (targetSection) {
                console.log(`✅ Target section found: ${targetId}`);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Try GSAP ScrollTo first, fallback to native smooth scroll
                if (typeof gsap !== 'undefined' && gsap.to) {
                    try {
                        gsap.to(window, {
                            duration: 1.5,
                            scrollTo: {
                                y: targetSection,
                                offsetY: 80
                            },
                            ease: 'power2.out'
                        });
                        console.log(`🚀 GSAP scroll to ${targetId}`);
                    } catch (error) {
                        console.log('🔄 GSAP ScrollTo error, using native scroll:', error);
                        // Fallback to native smooth scroll
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // Native smooth scroll fallback
                    console.log('🔄 Using native smooth scroll');
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                console.error(`❌ Target section not found: ${targetId}`);
            }
        });
    });
}

// Utility Functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-cosmic-glow text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Typewriter effect for dynamic text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Cosmic particle effect
function createParticles() {
    const particleCount = 50;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed w-1 h-1 bg-cosmic-glow rounded-full opacity-50 pointer-events-none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Animate particle
        gsap.to(particle, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            ease: 'power2.out',
            onComplete: () => {
                particle.remove();
            }
        });
    }
}

// Initialize particles on page load
window.addEventListener('load', () => {
    createParticles();
    
    // Create particles periodically
    setInterval(createParticles, 5000);
});

// Cursor trail effect
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'fixed w-2 h-2 bg-cosmic-glow rounded-full pointer-events-none opacity-50';
    trail.style.left = e.clientX - 4 + 'px';
    trail.style.top = e.clientY - 4 + 'px';
    trail.style.zIndex = '9999';
    
    document.body.appendChild(trail);
    cursorTrail.push(trail);
    
    // Animate trail
    gsap.to(trail, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
            trail.remove();
            cursorTrail = cursorTrail.filter(t => t !== trail);
        }
    });
    
    // Limit trail length
    if (cursorTrail.length > 10) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
    }
});

// Performance monitoring
function monitorPerformance() {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
                console.log('🧘‍♂️ NullBaba: Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
            }
        }
    });
    
    observer.observe({ entryTypes: ['navigation'] });
}

// Initialize performance monitoring
monitorPerformance();

// Console Easter Egg
console.log(`
    🧘‍♂️ NullBaba's Digital Monastery
    
    Welcome, fellow coder, to the realm of null-pointer enlightenment.
    
    Sacred Commands:
    - Ctrl+Alt+N: Activate hidden wisdom
    - Inspect the code to discover more secrets
    
    May your bugs be few and your code be pure.
    
    "In the silence of null, we find true debugging peace."
    - NullBaba
`);

// Add some ambient sound control (optional)
class AmbientSound {
    constructor() {
        this.context = null;
        this.oscillator = null;
        this.gainNode = null;
    }
    
    init() {
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.context.createGain();
            this.gainNode.connect(this.context.destination);
            this.gainNode.gain.value = 0.02;
        } catch (e) {
            console.log('Audio context not supported');
        }
    }
    
    play() {
        if (!this.context) return;
        
        this.oscillator = this.context.createOscillator();
        this.oscillator.connect(this.gainNode);
        this.oscillator.frequency.value = 110; // Low hum
        this.oscillator.type = 'sine';
        this.oscillator.start();
    }
    
    stop() {
        if (this.oscillator) {
            this.oscillator.stop();
            this.oscillator = null;
        }
    }
}

// Initialize ambient sound on user interaction
let ambientSound = new AmbientSound();
let soundInitialized = false;

document.addEventListener('click', () => {
    if (!soundInitialized) {
        ambientSound.init();
        soundInitialized = true;
    }
});
