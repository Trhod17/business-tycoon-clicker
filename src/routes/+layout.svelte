<script lang="ts">
  import { player } from "$lib/shared/player";
  import "./styles.css";
  // @ts-ignore
  import FaLinux from 'svelte-icons/fa/FaLinux.svelte';
  import Clock from "../lib/components/clock.svelte";


  function ChangeToActive(button: number) {

  }
</script>

<div class="w-full mockup-window bg-base-300 border px-0 h-screen">
      <slot />
</div>

<div class="btm-nav w-full bg-neutral text-neutral-content grid grid-cols-3 border-t-[3px] border-t-base-300 border-x-white">
  <div class="btn-group btn-group-horizontal w-fit">
    <div class="btn btn-disabled text-white"><FaLinux /></div>
    <a class="btn px-20 text-xl" href="/">Work</a>
    <a class="btn px-20 text-xl" href="/portfolio">Portfolio</a>
    <!-- <a class="btn">Advertisement</a> -->
  </div>
  <div class="col-start-3 flex">
    <Clock />
  </div> 
</div>

<style>
</style>
