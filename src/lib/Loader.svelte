<script lang="ts">
  import { get } from 'svelte/store'
  import { useProgress } from '@threlte/extras'

  const { finishedOnce, progress } = useProgress()

  let progressValue = 0

  progress.subscribe((value) => {
    progressValue = value
  })

  let finished = get(finishedOnce)

  finishedOnce.subscribe((value) => {
    finished = value
  })

  $: classes = finished ? 'loader finished' : 'loader'
</script>

<div class={classes}>
  {#if !finished}
    <div>
      <div>Loading...</div>
      <div>{progressValue}</div>
    </div>
  {/if}
</div>

<style>
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: black;
    color: aliceblue;
    z-index: 10000;
    transition: opacity 3s ease-in-out;
  }

  .loader.finished {
    opacity: 0;
  }
</style>
