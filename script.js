const cond1 = 2
const cond2 = 3


function doubleTheNumber(num) {
  let result = num*2
  return result
}
const doubleNumber = doubleTheNumber(7)
console.log(doubleNumber)
console.log(doubleTheNumber(17))

function score(letter) {
  const scoreString = "a"
  if (letter === undefined) {
    return "you failed to send me letter!"
  }
  else if(scoreString === letter){
    return "you nailed it!"
  }
  else {
    return "try again!"
  }
}
console.log(score("b"))