import { writable } from 'svelte-local-storage-store'
interface Business {
  name: string;
  base_cost: number;
  base_income: number;
};

interface Owned_Business {
  business: Business;
  amount_owned: number;
};


export const player = writable('player', {
  cash: 0,
  level: 1,
  xp: 0,
  cashPerClick: 1,
  xpToNextLevel: 10,
  incomeOvertime: 0,
  business: [
    ["General Store", 1500, 150],
    ["Small Toy Store", 3500, 300],
    ["Fruit Shop", 4500, 400],
    ["Gift Shop", 5300, 570],
    ["Hardware Store", 11000, 900],
    ["Construction Company", 23000, 2400],
    ["Factory", 54000, 8000],
    ["Car Dealership", 89000, 15000],
    ["Supermarket", 100000, 25000],
  ],
  business_owned: <any>[],
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