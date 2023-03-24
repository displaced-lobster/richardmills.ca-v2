<script lang="ts">
  import { get } from 'svelte/store'
  import { useFrame, useTexture, useThrelte } from '@threlte/core'
  import { BufferAttribute, BufferGeometry, Points, PointsMaterial } from 'three'

  export let color = 'white'
  export let count = 100
  export let size = 1

  const geometry = new BufferGeometry()
  const particles = new Float32Array(count * 3)
  const material = new PointsMaterial({
    color,
    map: useTexture('./sp2.png'),
    size,
    transparent: true,
  })

  for (let i = 0; i < particles.length; i++) {
    particles[i] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new BufferAttribute(particles, 3))

  const points = new Points(geometry, material)
  const { scene } = useThrelte()

  scene.add(points)

  useFrame(({ pointer }) => {
    let p = get(pointer)

    points.position.x = p.x * 0.01
    points.position.y = p.y * -0.01
  })
</script>
