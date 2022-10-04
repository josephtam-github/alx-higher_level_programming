#!/usr/bin/node
const argv = require('process').argv;
if (argv.length > 3) {
  const myArray = [];
  argv.forEach((element) => {
    myArray.push(element);
  });
  myArray.shift();
  myArray.shift();
  myArray.sort(function (a, b) { return b - a; });
  console.log(myArray[1]);
} else {
  console.log(0);
}
