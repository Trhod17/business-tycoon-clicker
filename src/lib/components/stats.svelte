<script lang="ts">
  import "../../routes/styles.css";
  import { player } from "../shared/player";
  // @ts-ignore
  import currencyFormatter from "currency-formatter";
</script>

<div class="stats stats-vertical shadow border-primary-content w-full overflow-hidden">
  <div class="stat bg-info text-info-content ">
    <div class="stat-title text-xl font-bold">Cash</div>
    <div class="stat-value text-center">{currencyFormatter.format($player.cash, { code: "USD"})}</div>
    <div class="stat-desc text-lg">
      Amount per click: {currencyFormatter.format($player.cashPerClick, { code: "USD"})}
    </div>
  </div>
  <div
    class="stat bg-info text-info-content border-info-content place-content-center"
  >
    <div class="stat-title text-xl font-bold">Level</div>
    <div class="stat-value mx-auto">{$player.level}</div>
    <div class="stat-desc">
      <div class="relative">
        <p
          class="text-xl text-center font-bold text-secondary-content opacity-100 z-10"
        >
          {$player.xp} XP / {$player.xpToNextLevel} XP
        </p>
        <progress
          class="progress progress-primary w-[100%] border border-secondary h-[1.4rem] text absolute top-1 -z-10"
          value={$player.xp}
          max={$player.xpToNextLevel}
        />
        <p class="text-center">Until next level.</p>
      </div>
    </div>
  </div>
  <div class="stat bg-info text-info-content border-info-content">
    <div class="stat-title text-xl font-bold">Income</div>
    <div class="stat-value text-center"> {currencyFormatter.format($player.incomeOvertime, { code: "USD"})}</div>
    <div class="stat-desc text-lg">Per Month</div>
  </div>
</div>
