const fs = require('fs');
const find = require('./index.js');

const cityName = '齐齐哈尔'
const headNum = `132`
const endNum = `0000`
const mid = []

for (let i = 0; i < 9999; i++) {
  let httpArg;
  let temp;
  if (i >= 1000) {
    temp = String(i)
  } else if (i >= 100) {
    temp = `0${i}`
  } else if (i >= 10) {
    temp = `00${i}`
  } else {
    temp = `000${i}`
  }
  httpArg = `${headNum}${temp}${endNum}`
  jsonResult = JSON.stringify(find(Number(httpArg)))
  if (jsonResult && jsonResult.includes(cityName)) mid.push(temp)
}

fs.writeFileSync('./mid.json', JSON.stringify(mid))