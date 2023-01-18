<script lang="ts" context="module">
import { waitLocale } from 'svelte-i18n'

export async function preload() {
  // awaits for the loading of the 'en-US' and 'en' dictionaries
  return waitLocale()
}
</script>

<script lang="ts">
  import { player } from "$lib/shared/player";
  import "./styles.css";
  // @ts-ignore
  import FaLinux from "svelte-icons/fa/FaLinux.svelte";
  import Clock from "../lib/components/clock.svelte";
  import { _ } from 'svelte-i18n';
  import FaCircle from 'svelte-icons/fa/FaCircle.svelte'

  $: startClock = false;

  $: finishedInit = false;

  function ChangeToActive(button: number) {}

  // ["General Store", 1500, 150],
  //   ["Small Toy Store", 3500, 300],
  //   ["Fruit Shop", 4500, 400],
  //   ["Gift Shop", 5300, 570],
  //   ["Hardware Store", 11000, 900],
  //   ["Construction Company", 23000, 2400],
  //   ["Factory", 54000, 8000],
  //   ["Car Dealership", 89000, 15000],
  //   ["Supermarket", 100000, 25000]

  function createBusiness(
    name_value: string,
    costPerBusiness_value: number,
    incomePerMonth_value: number
  ) {
    $player.business.push({
      name: name_value,
      costPerBusiness: costPerBusiness_value,
      incomePerMonth: incomePerMonth_value,
    });
  }

  function initBusinesses() {
    createBusiness("general_store", 1500, 150);
    createBusiness("small_toy_store", 3500, 300);
    createBusiness("fruit_shop", 4500, 400);
    createBusiness("gift_shop", 5300, 570);
    createBusiness("hardware_store", 11000, 900);
    createBusiness("construction_company", 23000, 2400);
    createBusiness("factory", 54000, 8000);
    createBusiness("car_dealership", 89000, 15000);
    createBusiness("supermarket", 100000, 25000);
  }

  function init() {
    $player.business.length = 0;
    initBusinesses();

    setTimeout(() => {
      finishedInit = true;
      startClock = true;
      console.log("timeout over");
    }, 2000);
  }

  init();
</script>

{#if !finishedInit}
  <!-- content here -->

  <div class="loading-main">
    <div role="status" class="loading-inner">
      <h1 class="loading-title">{$_('page.title.text')}</h1>
      <svg aria-hidden="true" class="loading-spinner dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">{$_('page.title.loading')}</span>
  </div>
</div>
{:else}
  <!-- else content here -->

  <!-- <button class="btn" on:click={() => testStartClock()}>Test Clock Start</button> -->
  <div class="window">
    <div class="window-bar">
      <div class="fake-btn fake-btn-close"><FaCircle></FaCircle></div>
      <div class="fake-btn fake-btn-minimise"><FaCircle></FaCircle></div>
      <div class="fake-btn fake-btn-maximise"><FaCircle></FaCircle></div>
    </div>
    <slot />
  

  <div
    class="navigation-outer"
  >
    <div class="navigation-button-group">
      <div class="os-icon"><FaLinux /></div>
      <a class="navigation-button" href="/">{$_('page.work.nav')}</a>
      <a class="navigation-button" href="/portfolio">{$_('page.portfolio.nav')}</a>
      <!-- <a class="btn">Advertisement</a> -->
    </div>
    <div class="clock-area">
      {#if startClock}
        <Clock />
      {/if}
    </div>
  </div>
</div>
{/if}

<style>

  .clock-area {
    @apply col-start-3;
    @apply flex;
  }

  .os-icon {
    @apply btn;
    @apply btn-disabled;
    @apply text-white;
  }

  .navigation-button {
    @apply btn;
    @apply px-20;
    @apply text-xl;
  }

  .navigation-outer {
    @apply btm-nav;
    @apply bg-neutral;
    @apply text-neutral-content;
    @apply grid;
    @apply grid-cols-3;
    @apply border-t-[1px];
    @apply border-t-white;
    @apply border-x-white;
  }

  .navigation-button-group {
    @apply btn-group;
    @apply btn-group-horizontal;
    @apply w-fit;
  }

  .loading-main {
    @apply w-full;
    @apply h-screen;
    @apply grid;
    @apply place-items-center;
  }

  .loading-inner {
    @apply grid;
    @apply place-items-center;
  }

  .loading-title {
    @apply text-8xl; 
    @apply mb-14;
    @apply pb-10;
  }

  .window{
    @apply w-full;
    @apply bg-neutral-focus;
    @apply border; 
    @apply rounded-t-lg; 
    @apply px-0; 
    @apply h-screen;
  }

  .window-bar {
    @apply p-4;
    @apply bg-base-300;
    @apply rounded-t-lg;
    @apply border-b-[1px];
    @apply border-neutral-content;
    @apply flex;
    @apply flex-row-reverse;
  }

  .fake-btn {
    @apply w-7;
    @apply mx-1;
    @apply my-0;
  }

  .fake-btn-close {
    @apply text-error;
  }

  .fake-btn-minimise {
    @apply text-warning;
  }

  .fake-btn-maximise {
    @apply text-success;
  }

  .loading-spinner {
    @apply w-52;
    @apply h-52 mr-2;
    @apply text-gray-200;
    @apply animate-spin;
    @apply fill-blue-600;
  }
  
</style>
