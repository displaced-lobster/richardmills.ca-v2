<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@0.0.5 --transform --root ./static --types --keepnames --precision 6 ./assets/skull.glb
-->
<script lang="ts">
  import type * as THREE from 'three'
  import { Group } from 'three'
  import { T, Three, type Props, type Events, type Slots } from '@threlte/core'
  import { useGltf, useGltfAnimations } from '@threlte/extras'

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group>

  export const ref = new Group()

  type ActionName = 'skull'
  type GLTFResult = {
    nodes: {
      RetopoFlow088: THREE.Mesh
      RetopoFlow088_1: THREE.Mesh
    }
    materials: {
      skull: THREE.MeshStandardMaterial
      ['skull.001']: THREE.MeshStandardMaterial
    }
  }

  const { gltf } = useGltf<GLTFResult>('./skull-transformed.glb', { useDraco: true })
  export const { actions, mixer } = useGltfAnimations<ActionName>(gltf, ref)
</script>

{#if $gltf}
  <Three type={ref} {...$$restProps}>
    <T.Group name="Scene">
      <T.Group name="skull" position={[0.000223, 0.300358, 0.064092]}>
        <T.Mesh
          name="RetopoFlow088"
          geometry={$gltf.nodes.RetopoFlow088.geometry}
          material={$gltf.materials.skull}
        />
        <T.Mesh
          name="RetopoFlow088_1"
          geometry={$gltf.nodes.RetopoFlow088_1.geometry}
          material={$gltf.materials['skull.001']}
        />
      </T.Group>
    </T.Group>

    <slot {ref} />
  </Three>
{/if}
