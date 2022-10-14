#!/usr/bin/node
const process = require('process');
if (parseInt(process.argv[2])) {
  const limit = parseInt(process.argv[2]);
  const row = 'X'.repeat(limit);
  for (let i = 0; i < limit; i++) {
    console.log(row);
  }
} else {
  console.log('Missing size');
}
