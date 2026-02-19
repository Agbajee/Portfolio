gsap.registerPlugin(ScrollTrigger);

// Page Loader
gsap.to('.loader-text', {
    opacity: 1,
    duration: 0.5,
    onComplete: () => {
        gsap.to('.loader-text', {
            scale: 1.5,
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        });
        gsap.to('.page-loader', {
            yPercent: -100,
            duration: 0.8,
            delay: 1,
            ease: 'power2.inOut'
        });
    }
});


// Hero Animations
const heroTl = gsap.timeline({ delay: 1.5 });
heroTl
    .to('.hero-label', { opacity: 1, y: 0, duration: 0.8 })
    .to('.hero-title .line span', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .to('.cta-button', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.4');

// Section Title Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title.querySelector('span'), {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// About Animations
gsap.utils.toArray('.about-text p').forEach((p, i) => {
    gsap.to(p, {
        scrollTrigger: {
            trigger: p,
            start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.2
    });
});

gsap.utils.toArray('.stat-item').forEach((stat, i) => {
    gsap.to(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});

// Project Animations
gsap.utils.toArray('.project-item').forEach(project => {
    gsap.to(project, {
        scrollTrigger: {
            trigger: project,
            start: 'top 75%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Tech Cards
gsap.utils.toArray('.tech-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
    });
});

// Timeline Animations
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Contact Animations
const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
    }
});
contactTl
    .to('.contact-title', { opacity: 1, y: 0, duration: 1 })
    .to('.contact-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.contact-links', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: { y: target, offsetY: 80 },
                duration: 1,
                ease: 'power3.inOut'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Parallax Effect
gsap.utils.toArray('.project-visual').forEach(visual => {
    gsap.to(visual, {
        scrollTrigger: {
            trigger: visual,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -50
    });
});