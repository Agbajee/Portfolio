import { onBeforeUnmount, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let hasPlayedLoader = false

export function useGsapAnimations() {
  onMounted(() => {
    const shouldPlayLoader = !hasPlayedLoader

    if (!shouldPlayLoader) {
      gsap.set('.loader-text', { opacity: 0 })
      gsap.set('.page-loader', { yPercent: -100 })
    } else {
      gsap.to('.loader-text', {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          gsap.to('.loader-text', {
            scale: 1.5,
            opacity: 0,
            duration: 0.5,
            delay: 0.5
          })
          gsap.to('.page-loader', {
            yPercent: -100,
            duration: 0.8,
            delay: 1,
            ease: 'power2.inOut'
          })
        }
      })
      hasPlayedLoader = true
    }

    const heroDelay = shouldPlayLoader ? 1.5 : 0.2
    const heroTl = gsap.timeline({ delay: heroDelay })
    heroTl
      .to('.hero-label', { opacity: 1, y: 0, duration: 0.8 })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
      .to('.cta-button', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.4')

    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.from(title.querySelector('span'), {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    })

    gsap.utils.toArray('.about-text p').forEach((p, i) => {
      gsap.to(p, {
        scrollTrigger: {
          trigger: p,
          start: 'top 85%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.2
      })
    })

    gsap.utils.toArray('.stat-item').forEach((stat, i) => {
      gsap.to(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1
      })
    })

    gsap.utils.toArray('.project-item').forEach((project) => {
      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top 75%'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
    })

    gsap.utils.toArray('.tech-card').forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
      })
    })

    gsap.utils.toArray('.timeline-item').forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%'
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    })

    gsap.utils.toArray('.foundation-timeline-item').forEach((item, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%'
        },
        opacity: 1,
        x: 0,
        duration: 0.85,
        delay: i * 0.08,
        ease: 'power3.out'
      })
    })

    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%'
      }
    })

    contactTl
      .to('.contact-title', { opacity: 1, y: 0, duration: 1 })
      .to('.contact-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.contact-links', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')

    gsap.utils.toArray('.project-visual').forEach((visual) => {
      gsap.to(visual, {
        scrollTrigger: {
          trigger: visual,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -50
      })
    })
  })

  onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.killTweensOf('*')
  })
}
