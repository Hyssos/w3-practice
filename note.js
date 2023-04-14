/*let firstValue = 20
let secondValue = 30

if(firstValue < secondValue){
  console.log(`${firstValue} is less then ${secondValue}`)
}

if(firstValue <= secondValue){
  console.log(`${firstValue} is less then or equals to ${secondValue}`)
}

if(firstValue === secondValue){
  console.log(`${firstValue} exatly equals to ${secondValue}`)
}

if(firstValue !== secondValue){
  console.log(`${firstValue} doesn't equals to ${secondValue}`)
}*/

// && és || operatorok
let minimumVotingAge = 18
let age = 20
let registeredToVote = true

if(age >= minimumVotingAge && registeredToVote === true){
  console.log("Congratulation, you can vote!")
}

let daughterOfPresident = true
age = 17
if(age >= minimumVotingAge || daughterOfPresident === true){
console.log("Congratulation, you can vote!")
}

//while loop

let currentCount = 1;
while (currentCount <= 10) {
  console.log(`The currentCount is: ${currentCount}`)
  currentCount = currentCount +1
}
  console.log("done")

  let currentCount = 1;
while (currentCount <= 10) {
  console.log(`The currentCount is: ${currentCount}`)
  currentCount = currentCount +1
  currentCount += 1
  currentCount ++
  currentCount += 2

  currentCount -= 1
  currentCount -= 2
  currentCount -- 1

}
  console.log("done")