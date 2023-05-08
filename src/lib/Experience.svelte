<script lang="ts">
  import { Canvas, OrbitControls, T } from '@threlte/core'
  import AstronautHelmet from '$lib/AstronautHelmet.svelte'
  import Environment from '$lib/Environment.svelte'
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera
      makeDefault
      fov={75}
      aspect={2}
      near={0.05}
      far={15}
      position={[0, 0.35, 1.2]}
    >
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.2}
        enableDamping
        enablePan={false}
        maxDistance={2}
        target={{ y: 0.35 }}
      />
    </T.PerspectiveCamera>
    <T.DirectionalLight castShadow position={[3, 10, 10]} />
    <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
    <T.AmbientLight intensity={0.2} />
    <AstronautHelmet />
    <Environment />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
