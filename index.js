var number = 0;

function takeANumber(line) {
number ++
line.push(number);
return number
}
// [1, 2, 3,]
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
//[2,3]
// function currentLine(nextPerson) {
//   var i = 0;
//   while (i < nextPerson.length) {
//     nextPerson.push(`${i+1} ${nextPerson}, `)
//     i++;
//   }
//   if (nextPerson.length === 0) {
//     return 'The line is currently empty.'
//   } else {
//     return `The line is currently: ${nextPerson}`
//     }
// }

function currentLine(line) {
  
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    return `The line is currently: ${line.join(', ')}`
    }
}