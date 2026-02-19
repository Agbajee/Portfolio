<template>
  <footer>
    <p>&copy; <span id="year">{{ year }}</span> All Rights Reserved</p>
    <p>Designed &amp; Developed with Precision</p>
  </footer>
</template>

<script setup>
defineProps({
  year: {
    type: Number,
    required: true
  }
})
</script>