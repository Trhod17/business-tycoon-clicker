// export class clock {
//     // @ts-ignore
//     public clock = this;
//     public timeout: any;
//     public time: any;

//     public day: any;
//     public month: any;
//     public year: any;

//     constructor() {

//     }

//     stop() {
//         clearTimeout(this.timeout);
//     }

//     start() {
//         this.timeout = setTimeout(this.tick, 0);
//         this.time = Date.now();
//     }

//     tick() {
//         this.time += 1000;
//         this.timeout = setTimeout(this.tick, this.time - Date.now());
//         this.display();
//         this.update();
//     }

//     display() {
//     /** @public */
//         var hours = this.day;
//         var minutes = this.month;
//         var seconds = this.year;

//         hours = hours < 10 ? "0" + hours : "" + hours;
//         minutes = minutes < 10 ? "0" + minutes : "" + minutes;
//         seconds = seconds < 10 ? "0" + seconds : "" + seconds;

//         return 
//     }

//     update() {
//         let day = this.day;
//         let month = this.month;
//         let year = this.year;

//         if (day < 30) {
//             day += 1;
//         } else {
//             day = 1;
//             if (month < 12) {
//                 month += 1;
//             } else {
//                 month = 1;
//                 year += 1;
//             }
//         }
//     }
// }