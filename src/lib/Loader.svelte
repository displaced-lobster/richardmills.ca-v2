<script lang="ts">
  import { get } from 'svelte/store'
  import { useProgress } from '@threlte/extras'

  const { finishedOnce, progress } = useProgress()

  let progressValue = 0

  progress.subscribe((value) => {
    progressValue = value
  })
  $: progressWidth = `${progressValue * 100}%`

  let finished = get(finishedOnce)

  finishedOnce.subscribe((value) => {
    finished = value
  })

  $: classes = finished ? 'loader finished' : 'loader'
</script>

<div class={classes}>
  {#if !finished}
    <div class="font-sans text-sky-100 text-xs">
      <div class="animate-pulse">Loading...</div>
      <div class="w-80 bg-gray-700 h-2.5">
        <div class="bg-sky-100 h-2.5" style="width: {progressWidth}" />
      </div>
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
    z-index: 10000;
    transition: opacity 3s ease-in-out;
  }

  .loader.finished {
    opacity: 0;
    pointer-events: none;
  }
</style>
