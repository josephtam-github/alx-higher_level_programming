#!/usr/bin/node
const process = require('process');
if (parseInt(process.argv[2])) {
  const limit = parseInt(process.argv[2]);
  for (let i = 0; i < limit; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
