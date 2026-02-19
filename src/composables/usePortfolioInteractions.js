import { onBeforeUnmount, onMounted } from 'vue'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  DynamicDrawUsage,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three'

export function usePortfolioInteractions() {
  let animationFrame = null
  let scene = null
  let camera = null
  let renderer = null
  let serverPoints = null
  let connectionLines = null
  let reactionPoints = null
  let serverGeometry = null
  let serverMaterial = null
  let connectionGeometry = null
  let connectionMaterial = null
  let reactionGeometry = null
  let reactionMaterial = null
  let canvas = null

  const serverNodes = []
  const connections = []
  const reactionTracks = []

  const mouseTarget = { x: 0, y: 0 }
  const mouseCurrent = { x: 0, y: 0 }
  const frameInterval = 1000 / 30
  let lastFrameTime = 0
  let isReducedMotion = false
  let startTime = 0

  const calmColor = new Color(0xaec8ff)
  const loadColor = new Color(0xfebf7f)
  const optimizedColor = new Color(0x86efac)
  const lineCalmColor = new Color(0x9fb7ff)
  const lineLoadColor = new Color(0xf59e0b)
  const lineOptimizedColor = new Color(0x4ade80)
  const storyNodeColor = new Color()
  const storyLineColor = new Color()

  const smoothstep = (edge0, edge1, value) => {
    const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)))
    return t * t * (3 - 2 * t)
  }

  const buildServerStory = (isMobile) => {
    serverNodes.length = 0
    connections.length = 0
    reactionTracks.length = 0

    const rackCount = isMobile ? 3 : 4
    const levelCount = isMobile ? 4 : 6
    const rackSpacing = isMobile ? 13 : 11
    const levelSpacing = isMobile ? 7 : 6
    const baseY = -((levelCount - 1) * levelSpacing) / 2

    for (let rack = 0; rack < rackCount; rack += 1) {
      for (let level = 0; level < levelCount; level += 1) {
        const x = (rack - (rackCount - 1) / 2) * rackSpacing + (Math.random() - 0.5) * 0.9
        const y = baseY + level * levelSpacing + (Math.random() - 0.5) * 0.5
        const z = (Math.random() - 0.5) * 7
        serverNodes.push(new Vector3(x, y, z))
      }
    }

    const nodePositions = new Float32Array(serverNodes.length * 3)
    const nodeColors = new Float32Array(serverNodes.length * 3)
    const nodeBaseColor = new Color(0xc7d2fe)
    const nodeAccentColor = new Color(0x67e8f9)

    serverNodes.forEach((node, i) => {
      nodePositions[i * 3] = node.x
      nodePositions[i * 3 + 1] = node.y
      nodePositions[i * 3 + 2] = node.z

      const c = nodeBaseColor.clone().lerp(nodeAccentColor, Math.random() * 0.3)
      nodeColors[i * 3] = c.r
      nodeColors[i * 3 + 1] = c.g
      nodeColors[i * 3 + 2] = c.b
    })

    const getNodeIndex = (rack, level) => rack * levelCount + level

    for (let rack = 0; rack < rackCount; rack += 1) {
      for (let level = 0; level < levelCount - 1; level += 1) {
        const from = serverNodes[getNodeIndex(rack, level)]
        const to = serverNodes[getNodeIndex(rack, level + 1)]
        connections.push({ from, to })
      }
    }

    for (let rack = 0; rack < rackCount - 1; rack += 1) {
      for (let level = 0; level < levelCount; level += 1) {
        const from = serverNodes[getNodeIndex(rack, level)]
        const to = serverNodes[getNodeIndex(rack + 1, level)]
        connections.push({ from, to })
      }
    }

    for (let rack = 0; rack < rackCount - 1; rack += 1) {
      for (let level = 0; level < levelCount - 1; level += 1) {
        if (Math.random() > 0.58) {
          const from = serverNodes[getNodeIndex(rack, level)]
          const to = serverNodes[getNodeIndex(rack + 1, level + 1)]
          connections.push({ from, to })
        }
      }
    }

    const connectionPositions = new Float32Array(connections.length * 6)
    connections.forEach((connection, i) => {
      connectionPositions[i * 6] = connection.from.x
      connectionPositions[i * 6 + 1] = connection.from.y
      connectionPositions[i * 6 + 2] = connection.from.z
      connectionPositions[i * 6 + 3] = connection.to.x
      connectionPositions[i * 6 + 4] = connection.to.y
      connectionPositions[i * 6 + 5] = connection.to.z
    })

    const reactionCount = isMobile ? 7 : 13
    const reactionPositions = new Float32Array(reactionCount * 3)
    for (let i = 0; i < reactionCount; i += 1) {
      const connectionIndex = Math.floor(Math.random() * connections.length)
      reactionTracks.push({
        connectionIndex,
        progress: Math.random(),
        speed: 0.16 + Math.random() * 0.2
      })
      const connection = connections[connectionIndex]
      reactionPositions[i * 3] = connection.from.x
      reactionPositions[i * 3 + 1] = connection.from.y
      reactionPositions[i * 3 + 2] = connection.from.z
    }

    serverGeometry = new BufferGeometry()
    serverGeometry.setAttribute('position', new BufferAttribute(nodePositions, 3))
    serverGeometry.setAttribute('color', new BufferAttribute(nodeColors, 3))

    connectionGeometry = new BufferGeometry()
    connectionGeometry.setAttribute('position', new BufferAttribute(connectionPositions, 3))

    reactionGeometry = new BufferGeometry()
    const reactionAttribute = new BufferAttribute(reactionPositions, 3)
    reactionAttribute.setUsage(DynamicDrawUsage)
    reactionGeometry.setAttribute('position', reactionAttribute)

    serverMaterial = new PointsMaterial({
      size: isMobile ? 0.95 : 0.85,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true
    })

    connectionMaterial = new LineBasicMaterial({
      color: lineCalmColor,
      transparent: true,
      opacity: 0.16
    })

    reactionMaterial = new PointsMaterial({
      size: isMobile ? 1.15 : 1.05,
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      blending: AdditiveBlending
    })

    serverPoints = new Points(serverGeometry, serverMaterial)
    connectionLines = new LineSegments(connectionGeometry, connectionMaterial)
    reactionPoints = new Points(reactionGeometry, reactionMaterial)

    scene.add(connectionLines)
    scene.add(serverPoints)
    scene.add(reactionPoints)
  }

  const onResize = () => {
    if (!renderer || !camera) {
      return
    }

    const width = window.innerWidth
    const height = window.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  const onMouseMove = (event) => {
    const width = window.innerWidth || 1
    const height = window.innerHeight || 1
    mouseTarget.x = (event.clientX / width - 0.5) * 2
    mouseTarget.y = (event.clientY / height - 0.5) * 2
  }

  const renderScene = () => {
    if (!renderer || !scene || !camera) {
      return
    }
    renderer.render(scene, camera)
  }

  const updateStoryPhase = (elapsed) => {
    const cycle = elapsed % 36
    const burst = smoothstep(10.5, 14, cycle) * (1 - smoothstep(20, 24, cycle))
    const optimize = smoothstep(24, 30, cycle)

    storyNodeColor.copy(calmColor).lerp(loadColor, burst * 0.55).lerp(optimizedColor, optimize * 0.68)
    storyLineColor.copy(lineCalmColor).lerp(lineLoadColor, burst * 0.45).lerp(lineOptimizedColor, optimize * 0.72)

    if (serverMaterial) {
      serverMaterial.color.copy(storyNodeColor)
      serverMaterial.opacity = 0.44 + burst * 0.14 + optimize * 0.08
    }

    if (connectionMaterial) {
      connectionMaterial.color.copy(storyLineColor)
      connectionMaterial.opacity = 0.12 + burst * 0.09 + optimize * 0.05
    }

    if (reactionMaterial) {
      reactionMaterial.color.copy(storyNodeColor).lerp(optimizedColor, optimize * 0.45)
      reactionMaterial.opacity = 0.78 + burst * 0.12
    }

    return {
      burst,
      optimize,
      pulseSpeedMultiplier: 0.42 + burst * 1.1 + optimize * 0.36
    }
  }

  const updateReactionPulses = (delta, speedMultiplier) => {
    if (!reactionGeometry || reactionTracks.length === 0) {
      return
    }

    const reactionPositions = reactionGeometry.attributes.position.array

    reactionTracks.forEach((track, i) => {
      track.progress += delta * track.speed * speedMultiplier
      if (track.progress >= 1) {
        track.progress = 0
        if (Math.random() > 0.55) {
          track.connectionIndex = Math.floor(Math.random() * connections.length)
        }
      }

      const connection = connections[track.connectionIndex]
      const t = track.progress
      reactionPositions[i * 3] = connection.from.x + (connection.to.x - connection.from.x) * t
      reactionPositions[i * 3 + 1] = connection.from.y + (connection.to.y - connection.from.y) * t
      reactionPositions[i * 3 + 2] = connection.from.z + (connection.to.z - connection.from.z) * t
    })

    reactionGeometry.attributes.position.needsUpdate = true
  }

  const animate = (timestamp) => {
    animationFrame = requestAnimationFrame(animate)

    if (timestamp - lastFrameTime < frameInterval) {
      return
    }
    lastFrameTime = timestamp

    if (!serverPoints || !camera) {
      return
    }

    const elapsed = (timestamp - startTime) / 1000
    const delta = frameInterval / 1000
    const story = updateStoryPhase(elapsed)

    mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.03
    mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.03

    const idleDriftX = Math.sin(elapsed * 0.12) * 0.7
    const idleDriftY = Math.cos(elapsed * 0.09) * 0.45
    serverPoints.rotation.y += 0.00028 + story.burst * 0.00035
    serverPoints.rotation.x = mouseCurrent.y * 0.08 + idleDriftY * 0.02
    if (connectionLines) {
      connectionLines.rotation.y = serverPoints.rotation.y * 0.98
      connectionLines.rotation.x = serverPoints.rotation.x * 0.98
    }
    if (reactionPoints) {
      reactionPoints.rotation.y = serverPoints.rotation.y
      reactionPoints.rotation.x = serverPoints.rotation.x
    }

    camera.position.x = idleDriftX + mouseCurrent.x * 1.6
    camera.position.y = idleDriftY - mouseCurrent.y * 1.2
    camera.lookAt(0, 0, 0)

    updateReactionPulses(delta, story.pulseSpeedMultiplier)
    renderScene()
  }

  onMounted(() => {
    canvas = document.getElementById('particleCanvas')
    if (!canvas) {
      return
    }

    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    try {
      scene = new Scene()
      camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
      camera.position.set(0, 0, 56)

      renderer = new WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'low-power'
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearAlpha(0)
      onResize()

      const isMobile = window.innerWidth < 768
      buildServerStory(isMobile)
      startTime = performance.now()

      if (isReducedMotion) {
        updateStoryPhase(0)
        updateReactionPulses(0.16, 0.45)
        renderScene()
      } else {
        animationFrame = requestAnimationFrame(animate)
        if (!isMobile) {
          window.addEventListener('mousemove', onMouseMove, { passive: true })
        }
      }
    } catch (_error) {
      // If WebGL setup fails, keep hero clean without background animation.
    }

    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
    }

    if (serverPoints && scene) {
      scene.remove(serverPoints)
    }

    if (connectionLines && scene) {
      scene.remove(connectionLines)
    }

    if (reactionPoints && scene) {
      scene.remove(reactionPoints)
    }

    if (serverGeometry) {
      serverGeometry.dispose()
    }

    if (serverMaterial) {
      serverMaterial.dispose()
    }

    if (connectionGeometry) {
      connectionGeometry.dispose()
    }

    if (connectionMaterial) {
      connectionMaterial.dispose()
    }

    if (reactionGeometry) {
      reactionGeometry.dispose()
    }

    if (reactionMaterial) {
      reactionMaterial.dispose()
    }

    if (renderer) {
      renderer.dispose()
      if (typeof renderer.forceContextLoss === 'function') {
        renderer.forceContextLoss()
      }
    }
  })
}
