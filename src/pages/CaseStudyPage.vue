<template>
  <main class="case-study-page">
    <div class="case-study-shell" v-if="project">
      <header class="case-study-header route-section is-visible">
        <RouterLink class="case-study-back" to="/">
          <ArrowLeftIcon class="case-study-back-icon" />
          <span>Back to Portfolio</span>
        </RouterLink>
        <span class="case-study-kicker">Case Study {{ project.number }}</span>
      </header>

      <section class="case-study-hero route-section is-visible">
        <h1 class="case-study-title">{{ project.title }}</h1>
        <p class="case-study-summary">{{ project.summary }}</p>
        <p class="case-study-summary">{{ project.summarySecondary }}</p>
        <div class="case-study-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </section>

      <section class="case-study-grid route-section is-visible">
        <article class="case-study-panel">
          <h2 class="case-study-section-title">Challenge</h2>
          <p class="case-study-text">{{ project.challenge }}</p>
        </article>

        <article class="case-study-panel">
          <h2 class="case-study-section-title">Solution</h2>
          <p class="case-study-text">{{ project.solution }}</p>
        </article>
      </section>

      <section class="case-study-grid route-section is-visible">
        <article class="case-study-panel">
          <h2 class="case-study-section-title">Impact</h2>
          <ul class="case-study-list">
            <li v-for="impact in project.impact" :key="impact">
              <ChevronRightIcon class="list-item-icon" />
              <span>{{ impact }}</span>
            </li>
          </ul>
        </article>

        <article class="case-study-panel">
          <h2 class="case-study-section-title">Architecture Notes</h2>
          <ul class="case-study-list">
            <li v-for="item in project.architecture" :key="item">
              <ChevronRightIcon class="list-item-icon" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </section>

      <section class="case-study-metrics route-section is-visible">
        <article class="case-study-metric" v-for="metric in project.metrics" :key="metric.label">
          <div class="case-study-metric-value">{{ metric.value }}</div>
          <div class="case-study-metric-label">{{ metric.label }}</div>
        </article>
      </section>
    </div>

    <div class="case-study-empty" v-else>
      <h1 class="case-study-title">Case Study Not Found</h1>
      <p class="case-study-text">The requested case study does not exist.</p>
      <RouterLink class="case-study-back" to="/">
        <ArrowLeftIcon class="case-study-back-icon" />
        <span>Return to Portfolio</span>
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { RouterLink, useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'

const route = useRoute()

const project = computed(() => {
  const slug = route.params.slug
  return getProjectBySlug(typeof slug === 'string' ? slug : '')
})
</script>
