// Base 11ty Template Animations

window.addEventListener('load', () => {
    // Hero section animations
    gsap.from("#home h1", { opacity: 0, y: 50, duration: 1.2, delay: 0.2, ease: "power3.out" });
    gsap.from("#home p", { opacity: 0, y: 50, duration: 1.2, delay: 0.4, ease: "power3.out" });
    gsap.from("#home .btn-primary, #home .btn-secondary", { opacity: 0, scale: 0.8, duration: 1, delay: 0.7, stagger: 0.15, ease: "back.out(1.7)" });
});

gsap.registerPlugin(ScrollTrigger);

// GALLERY SECTION FADE-IN FROM CENTER ON SCROLL
// The whole gallery section (projects)
gsap.from("#projects .relative.flex", {
    opacity: 0,
    scale: 0.92,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#projects .relative.flex",
        start: "top 80%",
        toggleActions: "play none none none",
    }
});

// Mobile menu toggle with animation and hamburger to X
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const icon1 = document.getElementById('hamburger-icon');
const icon2 = document.getElementById('hamburger-icon-2');
const icon3 = document.getElementById('hamburger-icon-3');

function setHamburgerX(isOpen) {
    if (!icon1 || !icon2 || !icon3) return;
    if (isOpen) {
        icon1.style.transform = 'rotate(45deg) translateY(10px)';
        icon2.style.opacity = '0';
        icon3.style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        icon1.style.transform = '';
        icon2.style.opacity = '1';
        icon3.style.transform = '';
    }
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains('scale-y-100');
        mobileMenu.classList.toggle('scale-y-0');
        mobileMenu.classList.toggle('scale-y-100');
        mobileMenu.classList.toggle('pointer-events-none');
        mobileMenu.classList.toggle('pointer-events-auto');
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('opacity-100');
        setHamburgerX(!isOpen);
    });
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('scale-y-0');
            mobileMenu.classList.remove('scale-y-100');
            mobileMenu.classList.add('pointer-events-none');
            mobileMenu.classList.remove('pointer-events-auto');
            mobileMenu.classList.add('opacity-0');
            mobileMenu.classList.remove('opacity-100');
            setHamburgerX(false);
        });
    });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.add('scale-y-0');
            mobileMenu.classList.remove('scale-y-100');
            mobileMenu.classList.add('pointer-events-none');
            mobileMenu.classList.remove('pointer-events-auto');
            mobileMenu.classList.add('opacity-0');
            mobileMenu.classList.remove('opacity-100');
            setHamburgerX(false);
        }
    });
}