import { onBeforeUnmount, onMounted } from 'vue'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DynamicDrawUsage,
  LinearFilter,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Sprite,
  SpriteMaterial,
  WebGLRenderer
} from 'three'

const PHI = (1 + Math.sqrt(5)) / 2

export function usePortfolioInteractions() {
  let canvas = null
  let scene = null
  let camera = null
  let renderer = null
  let lineGeometry = null
  let lineMaterial = null
  let linesMesh = null
  let nodeGeometry = null
  let nodeMaterial = null
  let nodesMesh = null
  const tokenSprites = []
  const tokenMaterials = []
  const tokenTextures = []
  const tokenMeta = []
  let animationFrame = null

  let lineCount = 0
  let sampleCount = 0
  let fieldWidth = 0
  let fieldDepth = 0
  let nodeSampleIndex = 0

  let sampleX = null
  let sampleZ = null
  let linePhases = null

  const pointerTarget = { x: 0, y: 0 }
  const pointerCurrent = { x: 0, y: 0 }
  let mouseEnergy = 0
  let lastMouseX = 0
  let lastMouseY = 0
  let hasPointer = false
  let isReducedMotion = false
  let startTime = 0
  let lastFrameTime = 0
  const frameInterval = 1000 / 40

  const evaluateWave = (x, z, t, mx, mz) => {
    const envelope = Math.exp(-((x * x) / (fieldWidth * fieldWidth * 0.7)))
    const harmonicA = Math.cos(x * 0.09 + z * 0.035 + t * 0.42)
    const harmonicB = Math.cos(x * (0.09 * PHI) - z * 0.052 + t * 0.25 + PHI)
    const harmonicC = Math.cos(x * 0.047 + z * (0.05 / PHI) - t * 0.16 + 0.7)
    const base = (harmonicA * 0.6 + harmonicB * 0.32 + harmonicC * 0.2) * envelope * 3.4

    const dx = x - mx
    const dz = z - mz
    const distance = Math.sqrt(dx * dx + dz * dz)
    const interactionMask = Math.exp(-distance * 0.09)
    const interactionWave = Math.cos(distance * 0.28 - t * 3.4)
    const interaction = interactionMask * interactionWave * mouseEnergy * 1.25

    return base + interaction
  }

  const buildGeometry = (mobile) => {
    lineCount = mobile ? 18 : 30
    sampleCount = mobile ? 72 : 120
    fieldWidth = mobile ? 44 : 62
    fieldDepth = mobile ? 28 : 42
    nodeSampleIndex = Math.floor(sampleCount * 0.72)

    sampleX = new Float32Array(lineCount * sampleCount)
    sampleZ = new Float32Array(lineCount * sampleCount)
    linePhases = new Float32Array(lineCount)

    const segmentCount = lineCount * (sampleCount - 1)
    const linePositions = new Float32Array(segmentCount * 6)
    const lineColors = new Float32Array(segmentCount * 6)
    const nodePositions = new Float32Array(lineCount * 3)
    const nodeColors = new Float32Array(lineCount * 3)

    const lineBase = new Color(0x93a2c8)
    const lineHot = new Color(0xf5f7ff)
    const nodeBase = new Color(0xc6d4ff)
    const nodeHot = new Color(0xffffff)

    let segmentOffset = 0

    for (let i = 0; i < lineCount; i += 1) {
      const nz = lineCount > 1 ? i / (lineCount - 1) : 0
      const z = (nz - 0.5) * fieldDepth
      linePhases[i] = i * (PHI * 0.41)

      for (let j = 0; j < sampleCount; j += 1) {
        const nx = sampleCount > 1 ? j / (sampleCount - 1) : 0
        const x = (nx - 0.5) * fieldWidth
        const idx = i * sampleCount + j
        sampleX[idx] = x
        sampleZ[idx] = z

        if (j < sampleCount - 1) {
          const nextIdx = idx + 1
          linePositions[segmentOffset] = x
          linePositions[segmentOffset + 1] = 0
          linePositions[segmentOffset + 2] = z
          linePositions[segmentOffset + 3] = sampleX[nextIdx]
          linePositions[segmentOffset + 4] = 0
          linePositions[segmentOffset + 5] = sampleZ[nextIdx]

          const blend = 0.2 + nz * 0.55
          const c = lineBase.clone().lerp(lineHot, blend)
          lineColors[segmentOffset] = c.r
          lineColors[segmentOffset + 1] = c.g
          lineColors[segmentOffset + 2] = c.b
          lineColors[segmentOffset + 3] = c.r
          lineColors[segmentOffset + 4] = c.g
          lineColors[segmentOffset + 5] = c.b
          segmentOffset += 6
        }
      }

      const nodeIdx = i * sampleCount + nodeSampleIndex
      nodePositions[i * 3] = sampleX[nodeIdx]
      nodePositions[i * 3 + 1] = 0
      nodePositions[i * 3 + 2] = sampleZ[nodeIdx]

      const nodeBlend = 0.3 + nz * 0.55
      const nodeColor = nodeBase.clone().lerp(nodeHot, nodeBlend)
      nodeColors[i * 3] = nodeColor.r
      nodeColors[i * 3 + 1] = nodeColor.g
      nodeColors[i * 3 + 2] = nodeColor.b
    }

    lineGeometry = new BufferGeometry()
    const linePosAttr = new BufferAttribute(linePositions, 3)
    linePosAttr.setUsage(DynamicDrawUsage)
    lineGeometry.setAttribute('position', linePosAttr)
    lineGeometry.setAttribute('color', new BufferAttribute(lineColors, 3))

    nodeGeometry = new BufferGeometry()
    const nodePosAttr = new BufferAttribute(nodePositions, 3)
    nodePosAttr.setUsage(DynamicDrawUsage)
    nodeGeometry.setAttribute('position', nodePosAttr)
    nodeGeometry.setAttribute('color', new BufferAttribute(nodeColors, 3))

    lineMaterial = new LineBasicMaterial({
      transparent: true,
      opacity: mobile ? 0.34 : 0.42,
      vertexColors: true,
      blending: AdditiveBlending
    })

    nodeMaterial = new PointsMaterial({
      size: mobile ? 0.36 : 0.32,
      transparent: true,
      opacity: mobile ? 0.78 : 0.82,
      vertexColors: true,
      depthWrite: false,
      blending: AdditiveBlending
    })

    linesMesh = new LineSegments(lineGeometry, lineMaterial)
    nodesMesh = new Points(nodeGeometry, nodeMaterial)
    linesMesh.position.y = -4
    nodesMesh.position.y = -4
    linesMesh.rotation.x = -0.38
    nodesMesh.rotation.x = -0.38

    scene.add(linesMesh)
    scene.add(nodesMesh)
  }

  const createTokenSprite = (label, mobile) => {
    const textCanvas = document.createElement('canvas')
    const context = textCanvas.getContext('2d')
    if (!context) {
      return null
    }

    const fontSize = mobile ? 28 : 34
    const padX = mobile ? 24 : 30
    const padY = mobile ? 16 : 18
    context.font = `600 ${fontSize}px JetBrains Mono, monospace`
    const textWidth = Math.ceil(context.measureText(label).width)

    textCanvas.width = textWidth + padX * 2
    textCanvas.height = fontSize + padY * 2

    context.clearRect(0, 0, textCanvas.width, textCanvas.height)
    context.font = `600 ${fontSize}px JetBrains Mono, monospace`
    context.fillStyle = 'rgba(220, 228, 255, 0.95)'
    context.textBaseline = 'middle'
    context.shadowColor = 'rgba(190, 208, 255, 0.45)'
    context.shadowBlur = 10
    context.fillText(label, padX, textCanvas.height / 2)

    const texture = new CanvasTexture(textCanvas)
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter
    texture.needsUpdate = true

    const material = new SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: mobile ? 0.14 : 0.16,
      depthWrite: false,
      blending: AdditiveBlending
    })

    const sprite = new Sprite(material)
    const baseScale = mobile ? 0.0072 : 0.0085
    sprite.scale.set(textCanvas.width * baseScale, textCanvas.height * baseScale, 1)

    tokenTextures.push(texture)
    tokenMaterials.push(material)
    tokenSprites.push(sprite)
    return sprite
  }

  const buildMathTokens = (mobile) => {
    tokenSprites.length = 0
    tokenMaterials.length = 0
    tokenTextures.length = 0
    tokenMeta.length = 0

    const labels = [
      'phi = (1 + sqrt(5)) / 2',
      'f(x) = cos(phi*x) + cos(x/phi)',
      'y(t) = A cos(wt) + B sin(wt)',
      'sum(k=1..n) k = n(n+1)/2',
      'd/dx[cos(x)] = -sin(x)',
      'O(n log n)',
      'PHP: Queue::dispatch($job)',
      'PHP: Cache::remember(key, ttl)',
      'JS: Promise.all(tasks)',
      'JS: async (req) => await service()',
      'Dart: Future.wait(tasks)',
      'Dart: Stream.periodic(Duration())',
      'Redis: INCR metrics:requests',
      'SQL: SELECT ... FOR UPDATE',
      'JWT.verify(token)',
      'rate_limit(req.ip, 60)',
      'cos(a+b)=cos(a)cos(b)-sin(a)sin(b)',
      'sin^2(x)+cos^2(x)=1'
    ]

    const targetCount = mobile ? 12 : 18
    const depth = mobile ? 12 : 16
    const width = mobile ? 34 : 52
    const minY = mobile ? -1.2 : -2
    const maxY = mobile ? 13 : 15

    for (let i = 0; i < targetCount; i += 1) {
      const label = labels[i % labels.length]
      const sprite = createTokenSprite(label, mobile)
      if (!sprite) {
        continue
      }

      const baseX = (Math.random() - 0.5) * width
      const baseY = minY + Math.random() * (maxY - minY)
      const baseZ = -5 + (Math.random() - 0.5) * depth
      sprite.position.set(baseX, baseY, baseZ)
      scene.add(sprite)

      tokenMeta.push({
        baseX,
        baseY,
        baseZ,
        baseScaleX: sprite.scale.x,
        baseScaleY: sprite.scale.y,
        driftX: 0.22 + Math.random() * 0.55,
        driftY: 0.18 + Math.random() * 0.42,
        phase: Math.random() * Math.PI * 2,
        speed: 0.22 + Math.random() * 0.42,
        parallax: 0.16 + Math.random() * 0.28,
        baseOpacity: mobile ? 0.12 : 0.14,
        scalePhase: Math.random() * Math.PI * 2
      })
    }
  }

  const updateMathTokens = (elapsed) => {
    if (tokenSprites.length === 0) {
      return
    }

    for (let i = 0; i < tokenSprites.length; i += 1) {
      const sprite = tokenSprites[i]
      const meta = tokenMeta[i]
      if (!sprite || !meta) {
        continue
      }

      const t = elapsed * meta.speed + meta.phase
      const offsetX = Math.sin(t) * meta.driftX
      const offsetY = Math.cos(t * 0.86) * meta.driftY
      const parallaxX = pointerCurrent.x * meta.parallax * 2.2
      const parallaxY = -pointerCurrent.y * meta.parallax * 1.4

      sprite.position.x = meta.baseX + offsetX + parallaxX
      sprite.position.y = meta.baseY + offsetY + parallaxY
      sprite.position.z = meta.baseZ

      const pulse = (Math.sin(elapsed * 0.7 + meta.scalePhase) + 1) * 0.02
      sprite.scale.set(
        meta.baseScaleX * (1 + pulse),
        meta.baseScaleY * (1 + pulse),
        1
      )

      const material = tokenMaterials[i]
      if (material) {
        material.opacity = Math.min(0.28, meta.baseOpacity + mouseEnergy * 0.12 + pulse * 0.8)
      }
    }
  }

  const updateGeometry = (elapsed) => {
    if (!lineGeometry || !nodeGeometry) {
      return
    }

    const linePositions = lineGeometry.attributes.position.array
    const nodePositions = nodeGeometry.attributes.position.array

    const mouseFieldX = pointerCurrent.x * fieldWidth * 0.44
    const mouseFieldZ = pointerCurrent.y * fieldDepth * 0.44
    const pulse = 1 + Math.sin(elapsed * 0.7) * 0.05
    const intensity = pulse + mouseEnergy * 0.35

    let segmentOffset = 0
    for (let i = 0; i < lineCount; i += 1) {
      const phase = linePhases[i]
      for (let j = 0; j < sampleCount - 1; j += 1) {
        const idx = i * sampleCount + j
        const nextIdx = idx + 1

        const x0 = sampleX[idx]
        const z0 = sampleZ[idx]
        const x1 = sampleX[nextIdx]
        const z1 = sampleZ[nextIdx]

        const y0 = evaluateWave(x0, z0, elapsed + phase, mouseFieldX, mouseFieldZ) * intensity
        const y1 = evaluateWave(x1, z1, elapsed + phase, mouseFieldX, mouseFieldZ) * intensity

        linePositions[segmentOffset] = x0
        linePositions[segmentOffset + 1] = y0
        linePositions[segmentOffset + 2] = z0
        linePositions[segmentOffset + 3] = x1
        linePositions[segmentOffset + 4] = y1
        linePositions[segmentOffset + 5] = z1
        segmentOffset += 6
      }

      const nodeIdx = i * sampleCount + nodeSampleIndex
      const nodeX = sampleX[nodeIdx]
      const nodeZ = sampleZ[nodeIdx]
      const nodeY = evaluateWave(nodeX, nodeZ, elapsed + phase, mouseFieldX, mouseFieldZ) * intensity
      nodePositions[i * 3] = nodeX
      nodePositions[i * 3 + 1] = nodeY
      nodePositions[i * 3 + 2] = nodeZ
    }

    lineGeometry.attributes.position.needsUpdate = true
    nodeGeometry.attributes.position.needsUpdate = true

    if (lineMaterial) {
      lineMaterial.opacity = 0.35 + mouseEnergy * 0.16
    }
    if (nodeMaterial) {
      nodeMaterial.opacity = 0.78 + mouseEnergy * 0.16
      nodeMaterial.size = 0.32 + mouseEnergy * 0.05
    }
  }

  const onResize = () => {
    if (!camera || !renderer) {
      return
    }
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  const onMouseMove = (event) => {
    const width = window.innerWidth || 1
    const height = window.innerHeight || 1
    pointerTarget.x = (event.clientX / width - 0.5) * 2
    pointerTarget.y = (event.clientY / height - 0.5) * 2

    if (!hasPointer) {
      hasPointer = true
      lastMouseX = event.clientX
      lastMouseY = event.clientY
      return
    }

    const dx = event.clientX - lastMouseX
    const dy = event.clientY - lastMouseY
    const velocity = Math.min(1, Math.hypot(dx, dy) / 26)
    mouseEnergy = Math.min(1, mouseEnergy + velocity * 0.23)
    lastMouseX = event.clientX
    lastMouseY = event.clientY
  }

  const render = (timestamp) => {
    animationFrame = requestAnimationFrame(render)
    if (timestamp - lastFrameTime < frameInterval) {
      return
    }
    lastFrameTime = timestamp

    if (!scene || !camera || !renderer) {
      return
    }

    const elapsed = (timestamp - startTime) / 1000
    pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.04
    pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.04
    mouseEnergy = Math.max(0, mouseEnergy - 0.012)

    if (linesMesh && nodesMesh) {
      const drift = Math.sin(elapsed * 0.18) * 0.02
      const rotY = pointerCurrent.x * 0.12 + drift
      const rotX = -0.38 + pointerCurrent.y * 0.05
      linesMesh.rotation.y = rotY
      nodesMesh.rotation.y = rotY
      linesMesh.rotation.x = rotX
      nodesMesh.rotation.x = rotX
    }

    camera.position.x = pointerCurrent.x * 1.6
    camera.position.y = 3.5 + pointerCurrent.y * 1.2
    camera.lookAt(0, -2.2, 0)

    updateGeometry(elapsed)
    updateMathTokens(elapsed)
    renderer.render(scene, camera)
  }

  onMounted(() => {
    canvas = document.getElementById('heroMathCanvas')
    if (!canvas) {
      return
    }

    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    try {
      scene = new Scene()
      camera = new PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 200)
      camera.position.set(0, 3.5, 46)

      renderer = new WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearAlpha(0)

      onResize()
      buildGeometry(window.innerWidth <= 968)
      buildMathTokens(window.innerWidth <= 968)
      startTime = performance.now()

      if (isReducedMotion) {
        updateGeometry(0)
        updateMathTokens(0)
        renderer.render(scene, camera)
      } else {
        animationFrame = requestAnimationFrame(render)
        window.addEventListener('mousemove', onMouseMove, { passive: true })
      }
    } catch (_error) {
      // Keep static hero if WebGL is unavailable.
    }

    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
    }

    if (linesMesh && scene) {
      scene.remove(linesMesh)
    }
    if (nodesMesh && scene) {
      scene.remove(nodesMesh)
    }
    tokenSprites.forEach((sprite) => {
      if (scene && sprite) {
        scene.remove(sprite)
      }
    })

    if (lineGeometry) {
      lineGeometry.dispose()
    }
    if (lineMaterial) {
      lineMaterial.dispose()
    }
    if (nodeGeometry) {
      nodeGeometry.dispose()
    }
    if (nodeMaterial) {
      nodeMaterial.dispose()
    }
    tokenMaterials.forEach((material) => {
      if (material) {
        material.dispose()
      }
    })
    tokenTextures.forEach((texture) => {
      if (texture) {
        texture.dispose()
      }
    })

    if (renderer) {
      renderer.dispose()
      if (typeof renderer.forceContextLoss === 'function') {
        renderer.forceContextLoss()
      }
    }
  })
}
