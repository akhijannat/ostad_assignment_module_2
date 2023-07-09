//****************************************** */
//*************** Exercise 1 ***************
//****************************************** */
const obj = { 
    name: 'Jenifar', 
    city: 'London' 
};
// Object Destructureing
const {name, city} = obj

const ageArr = [10, 20, 30];

// Array Destructuring
const [ageIn0, ageIn1, ageIn2] = ageArr;

function destructureExample (obj, ageArr) {
    const {name} = obj;
    const [ , ageIn1 ,] = ageArr;

    return {name, ageIn1}
}

// Value print in DOM
const showName = document.getElementById('name');
const showAge = document.getElementById('age');

const showResult = destructureExample (obj, ageArr);
showName.innerHTML = showResult.name;
showAge.innerHTML = showResult.ageIn1

//****************************************** */
//*************** Exercise 2 ***************\\
//****************************************** */
function sumNumbers (...numbers) {
    let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;

}
let showSumResult = sumNumbers(1, 2, 3, 4, 5);
// Value print in DOM
let showSumNum = document.getElementById('sumNum')
showSumNum.innerHTML = showSumResult

//****************************************** */
//*************** Exercise 3 ***************\\
//****************************************** */
const showMessage = document.getElementById('showmsg')
function createGreeting(name) {
    let msg = `"Hello, ${name}! Welcome to our website."`;
    showMessage.innerHTML = msg;
    // console.log(msg);
}
createGreeting("Jenifar");

//****************************************** */
//*************** Exercise 4 ***************\\
//****************************************** */
const showEvenOdd = document.getElementById('showEvenOdd')
function isEven(number) {
    let oddEvenNum = (number % 2  == 0) ? "Even" : "Odd";
    showEvenOdd.innerHTML = oddEvenNum
    // console.log(`The number is ${oddEvenNum}.`);
}
isEven(10)

//****************************************** */
//*************** Exercise 5 ***************\\
//****************************************** */
const arrFun = `const multiply = (a, b) => a * b`;
const arrowFunction = document.getElementById('arrowFunction')
arrowFunction.innerHTML = arrFun

const multiply = (a, b) => a * b
// console.log(2*3);
multiply(2*3)

//****************************************** */
//*************** Exercise 6 ***************\\
//****************************************** */
function getLargestNumber(num1, num2) {
    let largest = num1 > num2 ? num1 : num2;

    // display the result
    const showLargestNumber = document.getElementById('showLargestNumber')
    
    showLargestNumber.innerHTML = largest;

    // console.log("The largest number is " + largest);
}
getLargestNumber(5,10)

//****************************************** */
//*************** Exercise 7 ***************\\
//****************************************** */
const address = {
    street: "123 Main St",
    city: "New York",
    // city: "New York",
    country: "USA"
  };
function getAddressCity(address) {
    const showCityName = document.getElementById('showCityName');
    showCityName.innerHTML = address?.city || "Unknown"
}
getAddressCity(address)

//****************************************** */
//*************** Exercise 8 ***************\\
//****************************************** */
const arrNum = [1, 2, 3, 4, 5];
function doubleNumbers() {
   const doubled = arrNum.map(num => num += num);

   // display the result
   const showDoubNum = document.getElementById('showDoubNum')
   showDoubNum.innerHTML = `[${doubled}]`;
}
doubleNumbers();

//****************************************** */
//*************** Exercise 9 ***************\\
//****************************************** */
const numForFilter = [1, 2, 3, 4, 5];
function filterEvenNumbers() {
    let filtringEven = numForFilter.filter(num => num % 2 === 0);
   
    // display the result
    const filterEven = document.getElementById('filterEven');
    filterEven.innerHTML = `[${filtringEven}]`;
    
    // console.log(filtringEven);
}
filterEvenNumbers()

//****************************************** */
//*************** Exercise 10 ***************\\
//****************************************** */
function sumArray(array) {
    const sum = array.reduce((total, item) => total + item);
    
    // display the result
    const sumNumReduce = document.getElementById('sumNumReduce');
    sumNumReduce.innerHTML = sum;
    
    // console.log(sum);
}
sumArray([1, 2, 3, 4, 5]);

//****************************************** */
//*************** Exercise 11 ***************\\
//****************************************** */
const numForSort = [5, 2, 8, 1, 4]
function sortNumbers() {
    const sortingNum = numForSort.sort();

     // display the result
     const sortNum = document.getElementById('sortNum');
     sortNum.innerHTML = sortingNum;
    // console.log(sortingNum);
}
sortNumbers();

