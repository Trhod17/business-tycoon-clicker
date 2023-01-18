import { writable } from 'svelte-local-storage-store'
import { player_version } from '../../constants';

interface Business {
  name: string;
  costPerBusiness: number;
  incomePerMonth: number;
}

interface OwnedBusiness {
  business: Business;
  quantity_owned: number;
}


export const player = writable('player_v' + player_version, {
  cash: 0,
  level: 1,
  xp: 0,
  cashPerClick: 1,
  xpToNextLevel: 10,
  incomeOvertime: 0,
  business: [] as Business[],
  business_owned: [] as OwnedBusiness[],
  day: 1,
  month: 1,
  year: 1
});


// ["Drop Shipper", 1300, 0], 
//   ["Corner Store", 10000, 0], 
//   ["Butcher", 25000, 0], 
//   ["Seafood Market", 30000, 0], 
//   ["Restaurant", 40000, 0], 
//   ["Construction Company", 120000, 0],
//   ["Factory", 400000, 0],
//   ["Hotel", 900000, 0],
//   ["", 0],