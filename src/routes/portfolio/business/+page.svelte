<script lang="ts">
  import { player } from "../../../lib/shared/player";
  import { _ } from 'svelte-i18n'
  // @ts-ignore

  function isDisabled(price: any) {
    if ($player.cash >= price) {
      return false;
    }

    return true;
  }

  function exists(business: any) {
    let a = JSON.stringify($player.business_owned);
    let b = JSON.stringify(business);

    let c = a.indexOf(b);

    if (c == -1) {
      return false;
    }
    return true;
    
  }

  function buyBusiness(business: any) {
    if ($player.business_owned.length != 0 && exists(business)) {
      let i = 0;
      for(const element of $player.business_owned) {
        
        let val = element.business.name == business.name;
        //console.log(val, i, element[0][0], business.name)
        
        if (val == true) {
          $player.business_owned[i].quantity_owned = $player.business_owned[i].quantity_owned += 1;
          break;
        }
        i += i + 1;
      };
    } else {
      $player.business_owned.push({business: business, quantity_owned: 1});
    }
   //console.log(business);
    $player.cash = $player.cash - business.costPerBusiness;
    $player.incomeOvertime += business.incomePerMonth;
  }

  // function testBuy(business: any) {
  //   let test = $player.business_owned[0][1] -= 11
  //   console.log(test)
  // }
</script>

<svelte:head>
  <title>{$_('business.page.title')}</title>
</svelte:head>

<section class="page-main">
  {#if $player.business.length != null}
    {#each $player.business as item}
      <div class="buy-card">
        <div class="card-body">
          <h2 class="card-title">{$_('business.card_title.' + item.name)}</h2>
          <p>{$_('business.card.cost')} {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.costPerBusiness)}</p>
          <p>
            {$_('business.card.income')} {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.incomePerMonth)}
          </p>
          <div class="card-actions justify-end">
            <button
              class="btn btn-accent"
              disabled={isDisabled(item.costPerBusiness)}
              on:click={() => buyBusiness(item)}>{$_('business.card.btn')}</button
            >
          </div>
        </div>
      </div>
    {/each}
  {/if}
</section>

<style>
  .page-main {
    @apply grid;
    @apply grid-cols-3;
    @apply gap-5;
    @apply auto-rows-min;
    @apply pt-10;
    @apply overflow-y-auto;
    @apply bg-neutral-focus;
    @apply h-[90vh];
  }

  .buy-card {
    @apply card;
    @apply w-[95%];
    @apply bg-base-100;
    @apply shadow-xl;
    @apply p-0;
    @apply justify-self-center;
    @apply border;
    @apply border-accent;
  }
</style>
