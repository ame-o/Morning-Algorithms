// ALGO CHALLENGE DAY #6 @everyone 

 
// #Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
function squareEveryDigit(number) {
    var n = number;
    var arr = n.toString().split('');
    for (i = 0; i < arr.length; i++) {
        arr[i] *=arr[i]
    }
    var z=arr.toString();
    return parseInt(z);
}
console.log(squareEveryDigit(89));

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Bonus Challenge: Get the answer in JS and Python
// The user who solve the algo gain 50xp in our server per solution!
