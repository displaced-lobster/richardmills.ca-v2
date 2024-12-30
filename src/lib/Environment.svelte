<script lang="ts">
  import { Environment } from '@threlte/extras'

  const files = ['front', 'back', 'top', 'bottom', 'right', 'left'].map((dir) => `${dir}.png`)
</script>

<Environment {files} isBackground />
