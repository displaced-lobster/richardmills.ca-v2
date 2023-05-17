<script lang="ts">
  import { get } from 'svelte/store'
  import { useFrame } from '@threlte/core'
  import Skull from '$lib/Skull.svelte'

  const options = [{ component: null }, { component: Skull }]
  let currentIndex = 0
  let readyToChange = true

  $: current = options[currentIndex]

  useFrame(({ camera }) => {
    const cameraInstance = get(camera)
    const { x, y, z } = cameraInstance.position

    if (readyToChange && Math.abs(x) < 0.5 && y > 0.25 && y < 1 && z < -0.5) {
      readyToChange = false
      currentIndex = (currentIndex + 1) % options.length
    } else if (z > 0) {
      readyToChange = true
    }
  })
</script>

{#if current.component}
  <svelte:component this={current.component} />
{/if}
