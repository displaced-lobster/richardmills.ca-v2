<script lang="ts">
  import { Canvas, T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import AstronautHelmet from '$lib/AstronautHelmet.svelte'
  import Environment from '$lib/Environment.svelte'
  import HelmetInternal from '$lib/HelmetInternal.svelte'
  import PlanetGroup from '$lib/PlanetGroup.svelte'

  export let autoRotate = true
</script>

<div class="h-full w-full">
  <Canvas>
    <T.PerspectiveCamera
      makeDefault
      fov={75}
      aspect={2}
      near={0.05}
      far={1000}
      position={[0, 0.35, 1.2]}
    >
      <OrbitControls
        {autoRotate}
        autoRotateSpeed={0.5}
        enableDamping
        enablePan={false}
        maxDistance={2}
        target={[0, 0.35, 0]}
      />
    </T.PerspectiveCamera>
    <T.DirectionalLight castShadow position={[3, 10, 10]} intensity={10} />
    <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
    <T.AmbientLight intensity={0.2} />
    <AstronautHelmet />
    <HelmetInternal />
    <PlanetGroup position={[400, 0, -600]} scale={300} />
    <Environment />
  </Canvas>
</div>
