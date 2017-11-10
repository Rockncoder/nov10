// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
//
//
// const times2 = num.map((element, index, arr) => {
//   // console.log(`el=${element}, ndx=${index}, array=${arr}`);
//   return element * 2;
// });
//
// const evenOnly = num.filter(element => !(element % 2));
// console.info(evenOnly);
//
// const alpha = letters.reduce((previous, current) => { return previous + current}, "ALPHA: ");
// console.info(alpha);
// const beta = letters.reduceRight((previous, current) => { return previous + current}, "BETA: ");
// console.info(beta);
//
// const sum = num.reduce((previous, current) => previous + current, 1000);
// console.info(sum);
//
//
// // let allows us to create block scoped variables 
// // they live and die within the curly braces 
// let val = 2;
//  console.info(`val = ${val}`);
//  { 
//   let val = 59; 
//   console.info(`val = ${val}`); 
// }
//  console.info(`val = ${val}`);  


function sum(){
  console.info(arguments);
}

sum(1, 2, 3, 4);