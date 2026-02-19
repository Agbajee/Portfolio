<template>
  <section id="home" class="hero route-section">
    <div class="hero-bg">
      <canvas id="particleCanvas"></canvas>
    </div>

    <div class="hero-content">
      <div class="hero-label">Full-Stack Engineer (Backend-First)</div>

      <p class="hero-subtitle">
        Laravel, Vue, Flutter. Backend architecture, Security, and Industrial level performance.
      </p>

      <a href="#work" class="cta-button" @click.prevent="$emit('navigate', 'work')">
        View Case Studies
      </a>
    </div>

    <div class="scroll-indicator">Scroll</div>
  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>
