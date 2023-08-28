<script lang="ts">
  import { Environment } from '@threlte/extras'

  const files = [...Array(6).keys()].map((i) => `/env-${i}-nr.png`)
</script>

<Environment {files} isBackground />
