 // --------------> task 1

// function reverseString (str) {
//     return str.split('').reverse().join('');
// }

// const orginalString = "exemple";
// const reversedString  =reverseString(orginalString)
// console.log(reversedString);

// task -------------> 2

// function processString(str) {
//     const numbers = [];

//     const words = [];

//     let currentWord = '';
//     let currentNumber = '';
//     for (let char of str) {
//         if (/\d/.test(char)) {
//             if (currentWord) {
//                 words.push(currentWord);
//                 currentWord = ''; 
//             }
//             currentNumber += char;
//         } else { 
//             if (currentNumber) {
//                 numbers.push(parseInt(currentNumber, 10));
//                 currentNumber = ''; 
//             }
//             currentWord += char;
//         }
//     }

//     if (currentWord) {
//         words.push(currentWord);
//     }
//     if (currentNumber) {
//         numbers.push(parseInt(currentNumber, 10));
//     }

//     const combinedWords = words.join('');

    
//     return {
//         numbers: numbers,
//         combinedWords: combinedWords
//     };
// }


// const inputString = "1java2script3 5deve6lo4per";
// const result = processString(inputString);

// console.log(result.numbers);      
// console.log(result.combinedWords); 


// task ----------------- 3
// function reverseNumberArray(str) {
//     return str
// .split('').map(Number).reverse();
// }

// const inputString = "34567";
// const result = reverseNumberArray(inputString);

// console.log(result);    


//   task --------------> 4

// function getEvennumber (arr) {
//     return arr.filter(number => number % 2 === 0);
// }

// const inputArray = [1,2,3,4,5,6,7,8,9];
// const evenNumber = getEvennumber(inputArray);
// console.log(evenNumber);

// task ------> 5

// const users = [ 
//     {id: 1, name: "Alice", age: 30},
//     {id: 2, name: "Bob", age: 34},
//     {id: 3, name: "Aziz", age: 90},
//     {id: 4, name: "david", age: 65}
// ];

// function findUsers(inputValue, key ) {
//     return users.find(user => user[key] === inputValue);
//  }

//  const inputKey = "name";
//  const inputValue = "Bob";

//  const foundUser = findUsers(inputValue, inputKey);

//  if (foundUser) {
//     console.log("Topilgan user:", foundUser);
//  } else {
//      console.log("User topilmadi:");
     
//  }

// task --------------------> 5

