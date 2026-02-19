import { onBeforeUnmount, onMounted } from 'vue'

export function usePortfolioInteractions() {
  let particlesAnimationFrame = null

  let canvas = null
  let ctx = null
  const particles = []
  const particleCount = 50

  const onResize = () => {
    if (!canvas) {
      return
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const drawParticles = () => {
    if (!canvas || !ctx) {
      return
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) {
        p.vx *= -1
      }
      if (p.y < 0 || p.y > canvas.height) {
        p.vy *= -1
      }

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fill()
    })

    particlesAnimationFrame = requestAnimationFrame(drawParticles)
  }

  onMounted(() => {
    canvas = document.getElementById('particleCanvas')
    if (canvas) {
      ctx = canvas.getContext('2d')
      onResize()

      particles.length = 0
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2
        })
      }

      particlesAnimationFrame = requestAnimationFrame(drawParticles)
    }

    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)

    if (particlesAnimationFrame !== null) {
      cancelAnimationFrame(particlesAnimationFrame)
    }
  })
}