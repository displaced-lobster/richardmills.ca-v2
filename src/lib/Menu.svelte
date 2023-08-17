<script lang="ts">
  import Button from '$lib/Button.svelte'

  let open = false

  const baseClass = 'list'

  $: icon = open ? 'chevron-down' : 'chevron-up'
  $: maxHeight = open ? 'max-h-96' : 'max-h-0'
  $: listClass = `${baseClass} ${maxHeight}`

  const content: { label: string; icon: string; iconSource: 'brands' | 'solid'; link?: string }[] =
    [
      {
        label: 'Github',
        icon: 'github',
        iconSource: 'brands',
        link: 'https://github.com/displaced-lobster'
      },
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        iconSource: 'brands',
        link: 'https://www.linkedin.com/in/rchrdmlls/'
      },
      { label: 'Resume', icon: 'file', iconSource: 'solid', link: './richard-mills-resume.pdf' }
    ]
</script>

<div class="fixed bottom-4 right-4">
  <Button {icon} on:click={() => (open = !open)} />
  <ul class={listClass}>
    {#each content as item}
      <li>
        <Button
          icon={item.icon}
          iconSource={item.iconSource}
          hidden={item.label}
          href={item.link}
        />
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  .list {
    @apply absolute bottom-12 right-0;
    @apply text-slate-200;
    @apply overflow-hidden;
    @apply text-right;
    @apply transition-all duration-300;
  }

  .list > li {
    @apply mb-2;
    @apply transition-all duration-300;
  }
</style>
