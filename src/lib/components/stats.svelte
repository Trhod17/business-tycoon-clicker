<script lang="ts">
  import "../../routes/styles.css";
  import { player } from "../shared/player";
  import { _ } from 'svelte-i18n'
</script>

<div class="stats stats-vertical shadow border-primary-content w-full overflow-hidden h-[80vh]">
  <div class="stat bg-info text-info-content ">
    <div class="stat-title text-3xl font-bold">{$_('stats.cash.title')}</div>
    <div class="stat-value text-center text-5xl">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format($player.cash)}</div>
    <div class="stat-desc text-2xl">
      {$_('stats.cash.desc')} {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format($player.cashPerClick)}
    </div>
  </div>
  <div
    class="stat bg-info text-info-content border-info-content place-content-center"
  >
    <div class="stat-title text-3xl font-bold">{$_('stats.level.title')}</div>
    <div class="stat-value mx-auto text-5xl">{$player.level}</div>
    <div class="stat-desc">
      <div class="relative">
        <p
          class="text-3xl text-center font-bold text-secondary-content opacity-100 z-10"
        >
          {$player.xp} {$_('stats.level.xp')} / {$player.xpToNextLevel} {$_('stats.level.xp')}
        </p>
        <progress
          class="progress progress-primary w-[100%] border border-secondary h-[2rem] text absolute top-0.5 -z-10"
          value={$player.xp}
          max={$player.xpToNextLevel}
        />
        <progress
          class="progress progress-primary bg-blend-darken w-[100%] border border-secondary h-[2rem] text absolute top-0.5 -z-20"
          value={$player.xp + 1}
          max={$player.xpToNextLevel}
        />
        <p class="stat-desc text-2xl">{$_('stats.level.desc')}</p>
      </div>
    </div>
  </div>
  <div class="stat bg-info text-info-content border-info-content">
    <div class="stat-title text-3xl font-bold">{$_('stats.income.title')}</div>
    <div class="stat-value text-center text-5xl"> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format($player.incomeOvertime)}</div>
    <div class="stat-desc text-2xl">{$_('stats.income.desc')}</div>
  </div>
</div>
