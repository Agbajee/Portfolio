<template>
  <section id="experience" class="route-section">
    <div class="section-number">04 / Experience</div>
    <h2 class="section-title"><span>TRACK RECORD</span></h2>
    <div class="experience-timeline">

      <!-- Current -->
      <div class="timeline-item">
        <div class="timeline-date">2021 — Present</div>
        <div class="timeline-content">
          <h3 class="timeline-role">Full-Stack Engineer</h3>
          <div class="timeline-company">Independent / Product-Focused Work</div>
          <p class="timeline-description">
            Designing and building backend-heavy web and mobile systems from architecture to deployment.
          </p>
          <ul class="timeline-achievements">
            <li><ChevronRightIcon class="list-item-icon" /><span>Architected API-first Laravel systems with modular routing</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Designed dual-wallet and reward logic with abuse safeguards</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Implemented OTP login, 2FA, and withdrawal protection flows</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Optimized database queries and enforced transactional integrity</span></li>
          </ul>
        </div>
      </div>

      <!-- Previous -->
      <div class="timeline-item">
        <div class="timeline-date">2019 — 2021</div>
        <div class="timeline-content">
          <h3 class="timeline-role">Full-Stack Developer</h3>
          <div class="timeline-company">Client & Startup Projects</div>
          <p class="timeline-description">
            Built and maintained production web and mobile applications across multiple domains.
          </p>
          <ul class="timeline-achievements">
            <li><ChevronRightIcon class="list-item-icon" /><span>Developed RESTful APIs consumed by Vue and Flutter apps</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Structured relational databases for performance and maintainability</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Integrated payment systems and role-based access controls</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Managed server deployments on DigitalOcean and Cloudways</span></li>
          </ul>
        </div>
      </div>

      <!-- Early Career -->
      <div class="timeline-item">
        <div class="timeline-date">2017 — 2019</div>
        <div class="timeline-content">
          <h3 class="timeline-role">Software Developer</h3>
          <div class="timeline-company">Early Career</div>
          <p class="timeline-description">
            Focused on core PHP development, frontend integration, and foundational backend systems.
          </p>
          <ul class="timeline-achievements">
            <li><ChevronRightIcon class="list-item-icon" /><span>Built CRUD systems and admin dashboards</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Gained experience in database normalization and indexing</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Developed reusable components in Vue</span></li>
            <li><ChevronRightIcon class="list-item-icon" /><span>Established clean coding and testing habits</span></li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>
