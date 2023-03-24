<script lang="ts">
  import { Canvas, T } from '@threlte/core'
  import StarField from '$lib/StarField.svelte'
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera makeDefault fov={75} aspect={2} near={1.5} far={5} position={[0, 0, 2]} />
    <StarField count={350} size={0.02} />
    <StarField count={1500} size={0.04} />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
