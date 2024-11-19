const fs = require('fs')
const mid = require('./mid.json')
let start = '132';
let end = '18';

const result = mid.reduce((acc, item,) =>{
  Array(100).fill("").map((_item,index,)=>{
    let stringIndex = index < 10 ? `0${index}` : `${index}`
    acc.push(`test${item}${stringIndex},` + `${start}${item}${stringIndex}${end}`)
  })

  return acc;
},[])

const csv = "姓名/Full Name,手机号/mobile Num,\n"+result.join(",\n")

fs.writeFile("data.csv", csv, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("CSV file saved successfully!");
  }
});