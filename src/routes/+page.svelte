<script lang="ts">
  import Button from '$lib/Button.svelte'
  import Experience from '$lib/Experience.svelte'
  import Loader from '$lib/Loader.svelte'
  import Menu from '$lib/Menu.svelte'

  let autoRotate = true
  $: icon = autoRotate ? 'pause' : 'play'
</script>

<div class="h-full w-full">
  <Loader />
  <div class="fixed bottom-4 left-4">
    <Button {icon} on:click={() => (autoRotate = !autoRotate)} />
  </div>
  <Experience {autoRotate} />
  <Menu />
</div>
