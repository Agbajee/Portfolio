<template>
  <section id="home" class="hero route-section">
    <div class="hero-bg">
      <canvas id="particleCanvas"></canvas>
    </div>
    <div class="hero-content">
      <div class="hero-label">Backend Engineer</div>
      <h1 class="hero-title">
        <div class="line"><span>RELIABLE</span></div>
        <div class="line"><span>SYSTEMS</span></div>
        <div class="line"><span>AT SCALE</span></div>
      </h1>
      <p class="hero-subtitle">
        Building robust backend infrastructure, designing clean APIs,
        and shipping products that solve real problems.
      </p>
      <a href="#work" class="cta-button" @click.prevent="$emit('navigate', 'work')">Explore Work</a>
    </div>
    <div class="scroll-indicator">Scroll</div>
  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>
