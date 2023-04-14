/*console.log ("loaded");
let carBrand = "Opel";
console.log ("carBrand:" ,carBrand);
carBrand = "BMW";
console.log (carBrand);

let doorNumber = 5;

let isDiesel = true;

let fuel = null;
// ez egy komment//

let firstNames = ["Dorka", "Márió", "Bence", "Edit" ];
console.log(firstNames.length)
console.log(firstNames[2])
//tömb utolsó tagjának kiírása//
console.log(firstNames[firstNames.length-1]);

firstNames[1]="Ivett";
console.log(firstNames);
//hozzáteszi Máriót//
firstNames.push("Márió");
console.log(firstNames);

function myFirstFunction (firstName, lastName) {
  console.log("My first function");
  return firstName + lastName;
}
console.log(myFirstFunction("Márk ", "AG" ));*/



/*let minimumVotingAge = 18
let age = 20
let registeredToVote = true

if(age >= minimumVotingAge && registeredToVote === true){
  console.log("Congratulation, you can vote!")
}

let daughterOfPresident = true
age = 17
if(age >= minimumVotingAge || daughterOfPresident === true){
console.log("Congratulation, you can vote!")
}*/

/*let currentCount = 1;
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
  console.log("done")*/

/*for loop

for (initialization; condition; incrementingSetup;){
  // some code
}*/

/*for (let currentCount = 1; currentCount <= 10; currentCount ++ ){
  console.log(`The currentCount is: ${currentCount}`)
}
console.log("done")


for (let evenNumber = 2; evenNumber <= 20; evenNumber += 2){
  console.log(evenNumber)
}*/

/*let startCount = 5;
let endCount = 25;

for (let counter = startCount; counter <= endCount; counter += 1){
  console.log(counter)
}*/

/*let startCount = 2;
let endCount = 20;
let countSkip = 2;

for (let counter = startCount; counter <= endCount; counter += countSkip){
  console.log(counter)
}*/

/*let members = ["Bence", "Ágota", "Márió", "Balázs"]

for (let index = 0; index <= members.length - 1; index ++){
  console.log(index)
  console.log(members[index])
}*/

/*let members = ["Bence", "Ágota", "Márió", "Balázs"]

for (let i = 0; i <= members.length - 1; i ++){
  console.log(i)
  console.log(members[i])
}*/

/*let numbers = [10,20,40,50]
let sum = 0;

for (let i=0; i <= numbers.length -1; i++){
  let num = numbers [i]
  sum = sum + num
}
console.log(sum)*/

let numbers = [10,40,20,-20,50]
let max = numbers[0] //10, 40, 50

for (let i=0; i <= numbers.length -1; i++){
  let num = numbers [i] // num jelen értéke 10, 40, 20, -20, 50
  if (num > max){     //10>10, 40>10, 20>40, -20>40, 50>40
    max = num
  }
}
console.log(max)