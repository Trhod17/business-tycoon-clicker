<script lang="ts">
 
import "../../routes/styles.css";
import { player } from "../shared/player";
import VirtualClock from 'virtual-clock';
import { _ } from 'svelte-i18n'

//export let running: boolean;

// Create a new clock
let clock = new VirtualClock;
 
// At instanciation, the clock is stopped at time 0.
console.log('Initial clock time: ' + clock.time);
 
// The `time` property may be queried at any time, for example in a render loop
 
// Start the clock by calling .start()
setTimeout(() => {
    clock.start();
    }, 500);


//console.log(running);
 
// Or toggling the `running` property
//clock.running = running;

clock.minimum = 0;
clock.maximum = 10 * 1000;
 
// Speed up the the flow of time
clock.rate = 12.0;
clock.loop = true;
 
// Or wind back the clock
//clock.rate = -1.0;

clock.alwaysAt(5 * 1000, () => {
    if ($player.day >= 30) {
        $player.day = 1;

        if ($player.month >= 12) {
            $player.month = 1;
            $player.year += $player.year + 1;
            $player.cash = $player.cash += $player.incomeOvertime;
        } else {
            $player.month = $player.month += 1
            $player.cash = $player.cash += $player.incomeOvertime;
        }
    } else {
        $player.day = $player.day += 1;
    }

});
 
// We can keep adjusting properties; time listeners will fire as expected
//clock.minimum -= 100;
//clock.rate *= 2;

</script>


<p id="clock">{$_('clock.time.day')} {$player.day} : {$_('clock.time.month')} {$player.month} : {$_('clock.time.year')} {$player.year}</p> 