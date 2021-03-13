'use strict';

// Write your code here
function sum(a, b) { //eslint-disable-line
  return [a+b, `The sum of ${a} and ${b} is ${a+b}.`];
}

testSum(4, 7);

function multiply(a, b) { //eslint-disable-line
  return [a*b, `The product of ${a} and ${b} is ${a*b}.`];
}

testMultiply(5,9);

function sumAndMultiply(a, b, c) { //eslint-disable-line
  return [sum(sum(a,b)[0],c)[0], multiply(multiply(a,b)[0],c)[0], `${a} and ${b} and ${c} sum to ${sum(sum(a,b)[0],c)[0]}.`, `The product of ${a} and ${b} and ${c} is ${multiply(multiply(a,b)[0],c)[0]}.`];
}

testSumAndMultiply(4,7,5);

let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  return [sum(sum(sumArr[0], sumArr[1])[0],sumArr[2])[0], `${sumArr} was passed in as an array of numbers, and ${sum(sum(sumArr[0], sumArr[1])[0],sumArr[2])[0]} is their sum.`];
}

testSumArray(testArray);

function multiplyArray(multArr) { //eslint-disable-line
  return [multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0], `The numbers ${multArr} have a product of ${multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0]}.`]
}

testMultiplyArray(testArray);

let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
