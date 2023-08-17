<script lang="ts">
  export let icon: string | undefined
  export let iconSource: 'solid' | 'regular' | 'brands' = 'solid'
  export let hidden = ''
  export let href: string | undefined = undefined

  const buttonBase = 'button'
  $: buttonClass = `${buttonBase} ${hidden ? 'with-hidden' : ''}`
  $: iconClass = `fa-${iconSource} fa-${icon}`
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  class={buttonClass}
  {href}
  target="_blank"
  type="button"
  on:click
>
  {#if hidden}
    <span class="btn-hidden">
      {hidden}
    </span>
  {/if}
  <i class={iconClass} />
</svelte:element>

<style lang="postcss">
  .button {
    @apply inline-flex items-center justify-center;
    @apply opacity-60 bg-slate-800;
    @apply border border-slate-200 rounded-full;
    @apply text-center text-slate-200 text-base;
    @apply w-10 h-10;
    @apply hover:opacity-90;
    @apply transition-all duration-300;
    transition: box-shadow 0.5s ease-in-out;
  }

  .button:hover {
    box-shadow: inset 0 0 0 2em theme('colors.orange.800');
  }

  .button.with-hidden {
    @apply hover:rounded-s-none;
    @apply hover:w-auto hover:px-3;
  }

  .btn-hidden {
    @apply box-border overflow-hidden whitespace-nowrap;
    @apply w-0;
    @apply pr-2.5;
    @apply hidden;
  }

  .button:hover > .btn-hidden {
    @apply w-auto;
    @apply inline-block;
  }
</style>
