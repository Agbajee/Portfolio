<template>
  <nav>
    <LiquidGlass
      v-if="isDesktop"
      v-bind="shellProps"
      class-name="nav-shell"
    >
      <a href="#home" class="logo" @click.prevent="handleNavigate('home')">AYOMIDE AGBAJE</a>
      <button type="button" class="menu-toggle" @click="$emit('toggle-menu')" aria-label="Toggle menu">
        <Bars3Icon class="menu-toggle-icon" />
      </button>
      <ul class="nav-menu" :class="{ active: isMenuActive }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            @click.prevent="handleNavigate(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </LiquidGlass>

    <div v-else class="nav-shell nav-shell--plain">
      <a href="#home" class="logo" @click.prevent="handleNavigate('home')">AYOMIDE AGBAJE</a>
      <button type="button" class="menu-toggle" @click="$emit('toggle-menu')" aria-label="Toggle menu">
        <Bars3Icon class="menu-toggle-icon" />
      </button>
      <ul class="nav-menu" :class="{ active: isMenuActive }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            @click.prevent="handleNavigate(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { LiquidGlass } from '@wxperia/liquid-glass-vue'

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

const isDesktop = ref(false)

const updateViewport = () => {
  isDesktop.value = window.innerWidth > 968
}

const handleNavigate = (sectionId) => {
  emit('navigate', sectionId)
  if (props.isMenuActive) {
    emit('close-menu')
  }
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})

const shellProps = computed(() => {
  return {
    displacementScale: 95,
    blurAmount: 0.12,
    saturation: 165,
    aberrationIntensity: 2.2,
    elasticity: 0.14,
    cornerRadius: 999,
    mode: 'shader',
    effect: 'liquidGlass',
    overLight: false,
    padding: '0px',
    style: { width: '100%' }
  }
})
</script>
