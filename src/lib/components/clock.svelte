<script lang="ts"> 
import "../../routes/styles.css";

import { player } from "../shared/player";

import VirtualClock from 'virtual-clock';
// Create a new clock
let clock = new VirtualClock;
 
// At instanciation, the clock is stopped at time 0.
console.log('Initial clock time: ' + clock.time);
 
// The `time` property may be queried at any time, for example in a render loop
 
// Start the clock by calling .start()
clock.start();
 
// Or toggling the `running` property
//clock.running = true;

clock.minimum = 0;
clock.maximum = 10 * 1000;
 
// Speed up the the flow of time
clock.rate = 15.0;
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


<p id="clock">Day {$player.day} : Month {$player.month} : Year {$player.year}</p> 