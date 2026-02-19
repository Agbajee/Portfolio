<template>
  <div class="page-loader">
    <div class="loader-text">Ayomide Agbaje</div>
  </div>

  <div class="scroll-progress">
    <span class="scroll-progress-bar" :style="scrollProgressStyle"></span>
  </div>
  <SiteHeader
    :is-menu-active="isMenuActive"
    :active-section="activeSection"
    :nav-items="headerNavItems"
    @toggle-menu="toggleMenu"
    @close-menu="closeMenu"
    @navigate="navigateToSection"
  />
  <SectionPager
    :items="sectionItems"
    :active-section="activeSection"
    @navigate="navigateToSection"
  />
  <HeroSection @navigate="navigateToSection" />
  <AboutSection />
  <WorkSection />
  <StackSection />
  <ExperienceSection />
  <EducationSection />
  <ContactSection />
  <SiteFooter :year="year" />
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SiteHeader from '../components/SiteHeader.vue'
import SectionPager from '../components/SectionPager.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import WorkSection from '../components/WorkSection.vue'
import StackSection from '../components/StackSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import EducationSection from '../components/EducationSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { usePortfolioInteractions } from '../composables/usePortfolioInteractions'
import { useGsapAnimations } from '../composables/useGsapAnimations'

gsap.registerPlugin(ScrollToPlugin)

const year = new Date().getFullYear()
const isMenuActive = ref(false)
const activeSection = ref('home')
const scrollProgress = ref(0)

const sectionItems = [
  { id: 'home', label: 'Home', number: '00' },
  { id: 'about', label: 'About', number: '01' },
  { id: 'work', label: 'Work', number: '02' },
  { id: 'stack', label: 'Stack', number: '03' },
  { id: 'experience', label: 'Experience', number: '04' },
  { id: 'foundations', label: 'Education', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' }
]

const headerNavItems = computed(() => sectionItems.filter((item) => item.id !== 'home'))
const scrollProgressStyle = computed(() => ({
  transform: `scaleX(${scrollProgress.value})`
}))

let visibilityObserver = null

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

const closeMenu = () => {
  isMenuActive.value = false
}

const navigateToSection = (sectionId) => {
  const target = document.getElementById(sectionId)
  if (!target) {
    return
  }

  gsap.to(window, {
    scrollTo: { y: target, offsetY: sectionId === 'home' ? 0 : 80 },
    duration: 0.95,
    ease: 'power3.inOut'
  })
  closeMenu()
}

const updateActiveSection = () => {
  const scanLine = window.scrollY + window.innerHeight * 0.4
  let currentSection = 'home'

  sectionItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (!el) {
      return
    }

    if (el.offsetTop <= scanLine) {
      currentSection = item.id
    }
  })

  activeSection.value = currentSection
}

const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
}

const handleScrollState = () => {
  updateActiveSection()
  updateScrollProgress()
}

const setupSectionVisibilityObserver = () => {
  const sectionElements = sectionItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)

  visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -12% 0px'
    }
  )

  sectionElements.forEach((section) => {
    visibilityObserver.observe(section)
  })
}

onMounted(async () => {
  document.body.classList.add('enhanced-motion')
  await nextTick()

  const heroSection = document.getElementById('home')
  if (heroSection) {
    heroSection.classList.add('is-visible')
  }

  setupSectionVisibilityObserver()

  handleScrollState()
  window.addEventListener('scroll', handleScrollState, { passive: true })
  window.addEventListener('resize', handleScrollState)
})

onBeforeUnmount(() => {
  document.body.classList.remove('enhanced-motion')
  window.removeEventListener('scroll', handleScrollState)
  window.removeEventListener('resize', handleScrollState)

  if (visibilityObserver) {
    visibilityObserver.disconnect()
  }
})

usePortfolioInteractions()
useGsapAnimations()
</script>
