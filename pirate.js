const pirateArray = Array.from("happy pirates");
console.info(pirateArray);

for (let [index, elem] of pirateArray.entries()) {
  console.info(`${index}, ${elem}`);
}

// const instantArr = Array.from({length: 100}, (elem, index) => (index + 1) * 5);
// console.info(instantArr);


const family = ['Bob', 'Sue', 'Fido'];
function printFamily(person1, person2, pet){
  console.info(`The family = ${person1}, ${person2}, and ${pet}`);
}


printFamily(...family);





