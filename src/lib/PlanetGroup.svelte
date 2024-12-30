<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import Clouds from '$lib/Clouds.svelte'
  import Planet from '$lib/Planet.svelte'

  let rotation = 0

  useFrame((ctx, delta) => {
    rotation += delta * 0.01
  })
</script>

<T.Group {...$$restProps} rotation.y={rotation}>
  <Clouds scale={1.01} />
  <Planet />
</T.Group>
