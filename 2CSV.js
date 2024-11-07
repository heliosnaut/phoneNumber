const fs = require('fs')
let start = '132';
let end = '18';

let mid = [
  '0452',
  '0650',
  '0651',
  '0660',
  '0661',
  '0662',
  '0663',
  '0672',
  '0673',
  '1282',
  '1295',
  '1296',
  '1452',
  '1462',
  '2452',
  '2462',
  '3452',
  '3460',
  '3461',
  '3462',
  '3463',
  '3464',
  '3493',
  '3494',
  '5152',
  '5162',
  '5868',
  '5869',
  '6352',
  '7452',
  '7466',
  '8402',
  '8452',
  '8498',
  '9871',
  '9872',
]

const result = mid.reduce((acc, item,) =>{
  Array(100).fill("").map((_item,index,)=>{
    let stringIndex = index < 10 ? `0${index}` : `${index}`
    acc.push(`test${item}${stringIndex},` + start + item + stringIndex +end)
  })

  return acc;
},[])

const csv = result.join(",\n")

fs.writeFile("data.csv", csv, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("CSV file saved successfully!");
  }
});