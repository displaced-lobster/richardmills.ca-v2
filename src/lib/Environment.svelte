<script lang="ts">
  import { useLoader, useThrelte } from '@threlte/core'
  import * as THREE from 'three'

  const loader = useLoader(THREE.CubeTextureLoader, () => new THREE.CubeTextureLoader())
  const { scene } = useThrelte()

  loader.load(
    [...Array(6).keys()].map((i) => `/env-${i}.png`),
    (texture) => {
      texture.encoding = THREE.sRGBEncoding
      scene.background = texture
      scene.environment = texture
    }
  )
</script>
