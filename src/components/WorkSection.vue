<template>
  <section id="work" class="route-section">
    <div class="section-number">02 / Work</div>
    <h2 class="section-title"><span>SELECTED PROJECTS</span></h2>

    <div class="projects-container projects-compact">
      <article
        v-for="project in projects"
        :key="project.slug"
        class="project-item"
      >
        <div class="project-visual" aria-hidden="true">
          <div class="project-visual-head">
            <div class="project-visual-type">{{ project.visualType }}</div>
            <div class="project-visual-stage">{{ project.stage }}</div>
          </div>
          <div class="project-visual-metrics">
            <div class="project-metric" v-for="metric in project.metrics" :key="metric.label">
              <div class="project-metric-value">{{ metric.value }}</div>
              <div class="project-metric-label">{{ metric.label }}</div>
            </div>
          </div>
        </div>

        <div class="project-info">
          <div class="project-number">{{ project.number }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.summary }}</p>
          <p class="project-description">{{ project.summarySecondary }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <RouterLink class="project-link" :to="{ name: 'case-study', params: { slug: project.slug } }">
            <span>View Case Study</span>
            <ArrowUpRightIcon class="project-link-icon" />
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
</script>
