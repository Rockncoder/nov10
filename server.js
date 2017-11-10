const server = require('http');
const PORT = 8080;
const food = require('./biscuit'); // load a package
const myFood = require('./biscuit/biscuit');
const fs = require('fs');

console.info(food);
console.info(myFood);

fs.readFile('./tales-of-space-and-time.txt', (err, content) => {
  if(err){
    console.error(err);
    throw err;
  }
  console.log(`[CONTENT], `, content.toString());
});

const add = (a, b) => a + b;


// server.createServer((req, res) => {
//   console.info(req.method, req.url);
//   switch(req.method){
//     case 'GET':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(`The time is ${Date.now()}`);
//       break;
//     case 'POST':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end(`POSTed time is ${Date.now()}`);
//       break;
//   }
// }).listen(PORT);