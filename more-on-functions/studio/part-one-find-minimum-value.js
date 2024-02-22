//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(numberArray){
  let min = numberArray[0];
  for (i = 0; i < numberArray.length; i++){
    if (numberArray[i] < min){
      min = numberArray[i];
    }
  }

let newArray = [];
newArray.push(min);
let indexOfMin = numberArray.indexOf(min); 
numberArray.splice((indexOfMin), 1);

if (numberArray.length > 0){
  findMinValue(nums3)
} else if (numberArray.length === 0){
    return newArray;
}
}    
console.log(findMinValue(nums3));

