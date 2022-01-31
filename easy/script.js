// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

function averageNum(nums) {
    var total = 0;
    for (i = 0; i < nums.length; i++){
        total = total + nums[i];
    }
    return total / nums.length
}

console.log(averageNum([1.5, 3, 2.5, 1]));
console.log(averageNum([1, 4, 7]));
console.log(averageNum([10, 5]));
