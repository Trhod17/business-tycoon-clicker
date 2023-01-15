<script lang="ts">
  import { player } from "../../../lib/shared/player";
  // @ts-ignore
  import currencyFormatter from "currency-formatter";

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
    if ($player.business_owned != 0 && exists(business)) {
      let i = 0;
      for(const element of $player.business_owned) {
        
        let val = element[0][0] == business[0];
        console.log(val, i, element[0][0], business[0])
        
        if (val == true) {
          $player.business_owned[i][1] = $player.business_owned[i][1] += 1;
          break;
        }
        i += i + 1;
      };
    } else {
      $player.business_owned.push([business, 1]);
    }
    console.log(business);
    $player.cash = $player.cash - business[1];
    $player.incomeOvertime += business[2];
  }

  // function testBuy(business: any) {
  //   let test = $player.business_owned[0][1] -= 11
  //   console.log(test)
  // }
</script>

<svelte:head>
  <title>Business Tycoon Clicker</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="grid grid-cols-3 gap-5 auto-rows-min pt-10 overflow-y-auto bg-neutral-focus h-[90vh]">
  {#if $player.business.length != null}
    {#each $player.business as item}
      <div class="card w-[95%] bg-base-100 shadow-xl p-0 justify-self-center border border-primary">
        <div class="card-body">
          <h2 class="card-title">{item[0]}</h2>
          <p>Price: {currencyFormatter.format(item[1], { code: "USD" })}</p>
          <p>
            Monthly Profits: {currencyFormatter.format(item[2], {
              code: "USD",
            })}
          </p>
          <div class="card-actions justify-end">
            <button
              class="btn btn-primary"
              disabled={isDisabled(item[1])}
              on:click={() => buyBusiness(item)}>Buy Now</button
            >
          </div>
        </div>
      </div>
    {/each}
  {/if}
</section>

<style>
</style>
