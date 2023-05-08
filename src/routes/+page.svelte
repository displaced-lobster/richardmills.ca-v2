<script lang="ts">
  import Experience from '$lib/Experience.svelte'
  import Loader from '$lib/Loader.svelte'
</script>

<div>
  <Loader />
  <Experience />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
