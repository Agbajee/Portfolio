<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-shell nav-shell--plain">
      <a href="#home" class="logo" @click.prevent="handleNavigate('home')">AYOMIDE AGBAJE</a>
      <button type="button" class="menu-toggle" @click="$emit('toggle-menu')" aria-label="Toggle menu">
        <Bars3Icon class="menu-toggle-icon" />
      </button>
      <ul class="nav-menu" :class="{ active: isMenuActive }">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" :class="{ active: activeSection === item.id }"
            @click.prevent="handleNavigate(item.id)">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const props = defineProps({
  isMenuActive: {
    type: Boolean,
    required: true
  },
  activeSection: {
    type: String,
    default: 'home'
  },
  navItems: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['toggle-menu', 'close-menu', 'navigate'])

const isScrolled = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 20
}

const handleNavigate = (sectionId) => {
  emit('navigate', sectionId)
  if (props.isMenuActive) {
    emit('close-menu')
  }
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>
