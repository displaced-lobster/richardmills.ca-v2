<script lang="ts">
  import { T } from '@threlte/core'
  import fragmentShader from '$lib/shaders/fragment.glsl?raw'
  import vertexShader from '$lib/shaders/vertex.glsl?raw'
</script>

<T.Mesh {...$$restProps}>
  <T.IcosahedronGeometry args={[1, 5]} />
  <T.ShaderMaterial transparent {fragmentShader} {vertexShader} />
</T.Mesh>
