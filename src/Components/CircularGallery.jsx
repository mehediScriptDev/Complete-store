import { useRef, useEffect } from 'react'
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Mesh,
  Program,
  Texture,
} from 'ogl'

function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance)
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance)
    }
  })
}

function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  context.font = font
  const metrics = context.measureText(text)
  const textWidth = Math.ceil(metrics.width)
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2)
  canvas.width = textWidth + 20
  canvas.height = textHeight + 20
  context.font = font
  context.fillStyle = color
  context.textBaseline = "middle"
  context.textAlign = "center"
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillText(text, canvas.width / 2, canvas.height / 2)
  const texture = new Texture(gl, { generateMipmaps: false })
  texture.image = canvas
  return { texture, width: canvas.width, height: canvas.height }
}

class Title {
  constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }) {
    autoBind(this)
    this.gl = gl
    this.plane = plane
    this.renderer = renderer
    this.text = text
    this.textColor = textColor
    this.font = font
    this.createMesh()
  }
  createMesh() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      this.text,
      this.font,
      this.textColor
    )
    const geometry = new Plane(this.gl)
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    })
    this.mesh = new Mesh(this.gl, { geometry, program })
    const aspect = width / height
    const textHeight = this.plane.scale.y * 0.15
    const textWidth = textHeight * aspect
    this.mesh.scale.set(textWidth, textHeight, 1)
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05
    this.mesh.setParent(this.plane)
  }
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }) {
    this.extra = 0
    this.geometry = geometry
    this.gl = gl
    this.image = image
    this.index = index
    this.length = length
    this.renderer = renderer
    this.scene = scene
    this.screen = screen
    this.text = text
    this.viewport = viewport
    this.bend = bend
    this.textColor = textColor
    this.borderRadius = borderRadius
    this.font = font
    this.createShader()
    this.createMesh()
    this.createTitle()
    this.onResize()
  }
  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false })
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        // Rounded box SDF for UV space
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          // Apply rounded corners (assumes vUv in [0,1])
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    })
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = this.image
    img.onload = () => {
      texture.image = img
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]
    }
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })
    this.plane.setParent(this.scene)
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      fontFamily: this.font
    })
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra

    const x = this.plane.position.x
    const H = this.viewport.width / 2

    if (this.bend === 0) {
      this.plane.position.y = 0
      this.plane.rotation.z = 0
    } else {
      const B_abs = Math.abs(this.bend)
      const R = (H * H + B_abs * B_abs) / (2 * B_abs)
      const effectiveX = Math.min(Math.abs(x), H)

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
      if (this.bend > 0) {
        this.plane.position.y = -arc
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
      } else {
        this.plane.position.y = arc
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
      }
    }

    this.speed = scroll.current - scroll.last
    this.program.uniforms.uTime.value += 0.04
    this.program.uniforms.uSpeed.value = this.speed

    const planeOffset = this.plane.scale.x / 2
    const viewportOffset = this.viewport.width / 2
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal
      this.isBefore = this.isAfter = false
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal
      this.isBefore = this.isAfter = false
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen
    if (viewport) {
      this.viewport = viewport
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]
      }
    }
    this.scale = this.screen.height / 1500
    this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height
    this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
    this.padding = 2
    this.width = this.plane.scale.x + this.padding
    this.widthTotal = this.width * this.length
    this.x = this.width * this.index
  }
}

class App {
  constructor(container, { items, bend, textColor = "#ffffff", borderRadius = 0, font = "bold 30px DM Sans" } = {}) {
    document.documentElement.classList.remove('no-js')
    this.container = container
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }
    this.onCheckDebounce = debounce(this.onCheck, 200)
    this.createRenderer()
    this.createCamera()
    this.createScene()
    this.onResize()
    this.createGeometry()
    this.createMedias(items, bend, textColor, borderRadius, font)
    this.update()
    this.addEventListeners()
  }
  createRenderer() {
    this.renderer = new Renderer({ alpha: true })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)
    this.container.appendChild(this.gl.canvas)
  }
  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 20
  }
  createScene() {
    this.scene = new Transform()
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    })
  }
  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLBNLl_foep55_M_ULaGPZzxQ1gbnqe6msg&s`, text: 'Bridge' },
      { image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/270px-Seal_of_the_University_of_Michigan.svg.png`, text: 'Desk Setup' },
      { image: `https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1459489874/bwsoej4ynhmdun8sfjul.jpg`, text: 'Waterfall' },
      { image: `https://www.impelit.se/wp-content/uploads/2025/02/03-aruba.webp`, text: 'Strawberries' },
      { image: `data:image/png;base64,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`, text: 'Deep Diving' },
      { image: `data:image/jpeg;base64,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`, text: 'Train Track' },
      { image: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4mQc8BB4Ye2MrVhcO8dXDUJ41I5e8VHNTuYXlu6k07oTxiytR`, text: 'Santorini' },
      { image: `https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/vsnwi4ppyv3n8p3u9y9o`, text: 'Blurry Lights' },
      { image: `https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg`, text: 'New York' },
      { image: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyH_vjkFWhCuobWCgVM6GSlEFMa7ZI4fLrKUNmgPuAFqMF_bL5`, text: 'Good Boy' },
      { image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png`, text: 'Coastline' },
      { image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/1200px-Eli_Lilly_and_Company.svg.png`, text: "Palm Trees" }
    ]
    const galleryItems = items && items.length ? items : defaultItems
    this.mediasImages = galleryItems.concat(galleryItems)
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      })
    })
  }
  onTouchDown(e) {
    this.isDown = true
    this.scroll.position = this.scroll.current
    this.start = e.touches ? e.touches[0].clientX : e.clientX
  }
  onTouchMove(e) {
    if (!this.isDown) return
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const distance = (this.start - x) * 0.05
    this.scroll.target = this.scroll.position + distance
  }
  onTouchUp() {
    this.isDown = false
    this.onCheck()
  }
  onWheel() {
    this.scroll.target += 2
    this.onCheckDebounce()
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return
    const width = this.medias[0].width
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width)
    const item = width * itemIndex
    this.scroll.target = this.scroll.target < 0 ? -item : item
  }
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    }
    this.renderer.setSize(this.screen.width, this.screen.height)
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    })
    const fov = (this.camera.fov * Math.PI) / 180
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect
    this.viewport = { width, height }
    if (this.medias) {
      this.medias.forEach((media) =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      )
    }
  }
  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    )
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction))
    }
    this.renderer.render({ scene: this.scene, camera: this.camera })
    this.scroll.last = this.scroll.current
    this.raf = window.requestAnimationFrame(this.update.bind(this))
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this)
    this.boundOnWheel = this.onWheel.bind(this)
    this.boundOnTouchDown = this.onTouchDown.bind(this)
    this.boundOnTouchMove = this.onTouchMove.bind(this)
    this.boundOnTouchUp = this.onTouchUp.bind(this)
    window.addEventListener('resize', this.boundOnResize)
    window.addEventListener('mousewheel', this.boundOnWheel)
    window.addEventListener('wheel', this.boundOnWheel)
    window.addEventListener('mousedown', this.boundOnTouchDown)
    window.addEventListener('mousemove', this.boundOnTouchMove)
    window.addEventListener('mouseup', this.boundOnTouchUp)
    window.addEventListener('touchstart', this.boundOnTouchDown)
    window.addEventListener('touchmove', this.boundOnTouchMove)
    window.addEventListener('touchend', this.boundOnTouchUp)
  }
  destroy() {
    window.cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.boundOnResize)
    window.removeEventListener('mousewheel', this.boundOnWheel)
    window.removeEventListener('wheel', this.boundOnWheel)
    window.removeEventListener('mousedown', this.boundOnTouchDown)
    window.removeEventListener('mousemove', this.boundOnTouchMove)
    window.removeEventListener('mouseup', this.boundOnTouchUp)
    window.removeEventListener('touchstart', this.boundOnTouchDown)
    window.removeEventListener('touchmove', this.boundOnTouchMove)
    window.removeEventListener('touchend', this.boundOnTouchUp)
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px DM Sans"
}) {
  const containerRef = useRef(null)
  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font })
    return () => {
      app.destroy()
    }
  }, [items, bend, textColor, borderRadius, font])
  return (
    <div className='w-full h-full overflow-hidden cursor-grab active:cursor-grabbing' ref={containerRef} />
  )
}
