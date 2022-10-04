#!/usr/bin/node
const process = require('process');

function factorial (a) {
  if (a < 2 || isNaN(a)) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

console.log(factorial(parseInt(process.argv[2])));
