// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// write a function to compute the fewest number of coins that you need to make up that amount
// if that amount of money cannout be made by any combinatins of coins, return false

// creating function with 2 parameters
const coinFun = (coins, total) => {
// adding an array
let arr = []
// adding for loop
    for (i = 0; i < arr.length; i++){
// adding conditons 
        if (coins < total) {
            x += arr[i]
            x.push(arr)
                
        }else{
            return false
        }
    }
}
// consoleloging test
console.log(coinFun([1,2,5], 11))



// let arr = [1, 2, 5]
// const coinFun = ([], x){
//     while (arr[i] != x) {
//         if (arr[i] > x){
//             arr[i] += x
//     }else (arr[i] < x){
//         return false
//     }
// }
// }

// console.log(coinFun(arr))