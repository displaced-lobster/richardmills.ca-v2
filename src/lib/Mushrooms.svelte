<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 --transform --root / --types --keepnames --precision 6 assets/mushrooms.glb
-->

<script lang="ts">
  import type * as THREE from 'three'
  import { Group } from 'three'
  import { T, type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { useGltf } from '@threlte/extras'

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  type GLTFResult = {
    nodes: {
      Mushroom_: THREE.Mesh
    }
    materials: {
      Mushroom: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/mushrooms-transformed.glb', { useDraco: true })

  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Mesh name="Mushroom_" geometry={gltf.nodes.Mushroom_.geometry} material={gltf.materials.Mushroom} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
