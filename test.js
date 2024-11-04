const fs = require('fs');
const fileWriter = fs.createWriteStream('./number.txt');
const find = require('./index.js');

const cityName = '齐齐哈尔'
const headNum = 132

for (let i = 0; i < 9999; i++) {
  let httpArg;
  if (i >= 1000) {
    httpArg = `${headNum}${i}0077`;
  } else if (i >= 100) {
    httpArg = `${headNum}0${i}0077`;
  } else if (i >= 10) {
    httpArg = `${headNum}00${i}0077`;
  } else {
    httpArg = `${headNum}000${i}0077`;
  }

  jsonResult = JSON.stringify(find(Number(httpArg)))
  if (jsonResult && jsonResult.includes(cityName)) fileWriter.write(`${httpArg}\n`);
}

fileWriter.end(() => console.log('File writing completed.'));