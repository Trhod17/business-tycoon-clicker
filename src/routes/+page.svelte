<script lang="ts">
  import "./styles.css";
  import Stats from "../lib/components/stats.svelte";
  import { player } from "../lib/shared/player";
  import { get } from "svelte/store";

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
  <title>Business Tycoon Clicker</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="grid grid-cols-3 grid-rows-4 gap-6 mx-2 px-4">
  <div class="row-span-3 col-span-1 p-0">
    <Stats> </Stats>
  </div>
  <div class="row-span-3 col-span-2">
    <button
      on:click={() => increment()}
      class="btn btn-accent w-full h-full text-1xl">Click</button
    >
  </div>
</section>

<style>
</style>
