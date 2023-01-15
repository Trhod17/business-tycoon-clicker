<script lang="ts">
  import { player } from "$lib/shared/player";
  import "./styles.css";
  import FaLinux from 'svelte-icons/fa/FaLinux.svelte';
  import Clock from "../lib/components/clock.svelte";


  function ChangeToActive(button: number) {

  }
</script>

<div class="w-full max-h-screen mockup-window bg-base-300 border px-0">
      <slot />
</div>

<div class="btm-nav w-full bg-neutral text-neutral-content grid grid-cols-3">
  <div class="btn-group btn-group-horizontal w-fit">
    <div class="btn btn-disabled text-white"><FaLinux /></div>
    <a class="btn px-10" href="/">Work</a>
    <a class="btn" href="/portfolio">Portfolio</a>
    <!-- <a class="btn">Advertisement</a> -->
  </div>
  <div class="col-start-3 flex">
    <Clock />
  </div> 
</div>

<style>
</style>
