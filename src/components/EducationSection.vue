<template>
  <section id="foundations" class="route-section">
    <div class="section-number">05 / Foundations</div>
    <h2 class="section-title"><span>EDUCATION & ENGINEERING APPROACH</span></h2>

    <div class="foundation-timeline">
      <article
        v-for="(item, index) in foundationTimeline"
        :key="item.title"
        :data-index="index"
        class="foundation-timeline-item"
        :class="{ active: activeIndex === index }"
        tabindex="0"
        @mouseenter="setActiveIndex(index)"
        @focusin="setActiveIndex(index)"
      >
        <div class="foundation-marker">
          <div class="foundation-phase">{{ item.phase }}</div>
          <span class="foundation-dot"></span>
        </div>

        <div class="foundation-content">
          <h3 class="foundation-title">{{ item.title }}</h3>
          <div class="foundation-subtitle">{{ item.subtitle }}</div>

          <p
            v-for="paragraph in item.paragraphs"
            :key="paragraph"
            class="foundation-description"
          >
            {{ paragraph }}
          </p>

          <ul v-if="item.points?.length" class="foundation-list">
            <li v-for="point in item.points" :key="point">
              <ChevronRightIcon class="list-item-icon" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const foundationTimeline = [
  {
    phase: 'Academic Foundation',
    title: 'B.Sc. Building (Management)',
    subtitle: 'Obafemi Awolowo University',
    paragraphs: [
      'Built a strong systems mindset around planning, sequencing, and lifecycle execution.',
      'That discipline now shapes how I design backend architecture and delivery workflows.'
    ],
    points: []
  },
  {
    phase: 'Engineering Principles',
    title: 'Architecture-Driven Development',
    subtitle: 'How I structure software decisions',
    paragraphs: [
      'I optimize for long-term maintainability, predictable behavior, and safe scalability.'
    ],
    points: [
      'API-first system design',
      'Data integrity over shortcuts',
      'Security by default (auth, rate limits, validation)',
      'Performance-aware queries and indexing',
      'Modular architecture for long-term maintainability'
    ]
  },
  {
    phase: 'Execution Style',
    title: 'From Scope to Production',
    subtitle: 'Product-aware engineering delivery',
    paragraphs: [
      'I translate product requirements into clear technical boundaries, implementation phases, and measurable outcomes.',
      'The focus is to ship reliable systems quickly without creating hidden technical debt.'
    ],
    points: []
  }
]

const activeIndex = ref(0)
let foundationObserver = null

const setActiveIndex = (index) => {
  activeIndex.value = index
}

onMounted(() => {
  const timelineItems = document.querySelectorAll('#foundations .foundation-timeline-item')

  foundationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          if (!Number.isNaN(index)) {
            activeIndex.value = index
          }
        }
      })
    },
    {
      threshold: 0.55,
      rootMargin: '-15% 0px -25% 0px'
    }
  )

  timelineItems.forEach((item) => foundationObserver.observe(item))
})

onBeforeUnmount(() => {
  if (foundationObserver) {
    foundationObserver.disconnect()
  }
})
</script>
