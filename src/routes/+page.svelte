<script lang="ts">
  import "./styles.css";
  import Stats from "../lib/components/stats.svelte";
  import { player } from "../lib/shared/player";
  import { _ } from 'svelte-i18n'

  function increment() {
    $player.cash += $player.cashPerClick;

    $player.xp += 1;

    if ($player.xp >= $player.xpToNextLevel) {
      $player.xp = 0;
      $player.level += 1;
      $player.cashPerClick += 1;
      $player.xpToNextLevel += 10;
    }
  }

  //$player.business_owned.push(["Business 1", 15000, 150, 20]);
</script>

<svelte:head>
  <title>{$_('work.page.title')}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="page-main">
  <div class="page-section-one">
    <Stats> </Stats>
  </div>
  <div class="page-section-two">
    <button
      on:click={() => increment()}
      class="money-button">{$_('work.button.title')}</button
    >
  </div>
</section>

<style>
  .page-main {
    @apply grid;
    @apply grid-cols-3;
    @apply grid-rows-3;
    @apply gap-6;
    @apply mx-2;
    @apply px-4;
    @apply bg-neutral-focus;
  }

  .page-section-one {
    @apply row-span-3;
    @apply col-span-1;
    @apply p-0;
    @apply mt-8;
  }

  .page-section-two {
    @apply row-span-3;
    @apply col-span-2;
    @apply grid;
    @apply place-items-center;
    @apply mt-9;
  }

  .money-button {
    @apply btn;
    @apply btn-accent; 
    @apply w-[95%];
    @apply h-[76vh];
    @apply text-8xl;
  }
</style>
