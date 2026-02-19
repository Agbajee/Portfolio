<template>
  <aside class="section-pager" aria-label="Section Navigation">
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      class="pager-dot"
      :class="{ active: activeSection === item.id }"
      :aria-label="`Go to ${item.label}`"
      @click="$emit('navigate', item.id)"
    >
      <span class="pager-index">{{ item.number }}</span>
      <span class="pager-label">{{ item.label }}</span>
    </button>
  </aside>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    default: 'home'
  }
})

defineEmits(['navigate'])
</script>