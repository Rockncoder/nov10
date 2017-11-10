const server = require('http');
const PORT = 8080;
const food = require('./biscuit'); // load a package
const myFood = require('./biscuit/biscuit');
const fs = require('fs');
const text = './tales-of-space-and-time.txt';

// console.info(food);
// console.info(myFood);
//
// fs.readFile('./tales-of-space-and-time.txt', (err, content) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log(`[CONTENT], `, content.toString());
// });
//

function readStream(req, res) {
  const rs = fs.createReadStream(text);
  rs.on('data', data => {
    const buffering = res.write(data);
    console.info(`was buffer flushed ${buffering}`);
  });
  rs.on('end', () => {
    res.end();
    console.info('finished');
  })
}

function readStream2(req, res) {
  const rs = fs.createReadStream(text);
  rs.on('data', data => {
    if (!res.write(data)) {
      console.info('paused');
      rs.pause();
    }
  });

  res.on('drain', () => {
    console.info('drained');
    rs.resume()
  });

  rs.on('end', () => {
    console.info('ended');
    res.end();
  })
}

function readStream3(req, res) {
  const rs = fs.createReadStream(text);
  rs.pipe(res, {end: false});
  rs.on('end', () => {
    res.write('We are finished');
    res.end();
  });
}


server.createServer((req, res) => {
  console.info(req.method, req.url);
  switch (req.method) {
    case 'GET':
      if (req.url === '/') {
        readStream3(req, res);
      }
      break;
    case 'POST':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`POSTed time is ${Date.now()}`);
      break;
  }
}).listen(PORT);