function sum(){
  let val, ndx = 0;
  let sum = 0;

  for(;ndx < arguments.length; ndx++){
    val = arguments[ndx];
    if(typeof val === 'number'){
      sum += val;
    }
  }
  return sum;
}

function sum2(){
  return Array.from(arguments)
    .filter(element => typeof element === 'number')
    .reduce((prev, curr) => prev + curr);
}


console.info(`The sum = ${sum(1, 2, 3, 4, null, 'Tom', 100)}`);
console.info(`The sum2 = ${sum2(1, 2, 3, 4, null, 'Tom', 100)}`);