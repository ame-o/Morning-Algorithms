/*****************************************************************************/
/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

/*
1) define any optional parameters to the function: 
  - index to keep track of current character (starting from end)
2) define base case: 
  - when index is at the first char in string return that char
  - if str is empty, return empty str
3) handle recursive call:
  - return current char in string at index + recursive call with index - 1

reverse(hello) = o + l + l + e + h = "olleh"

reverse(hello) = o + reverse(hell)
reverse(hell) = l + reverse(hel)
reverse(hel) = l + reverse(he)
reverse(he) = e + reverse(h)
reverse(h) = h

*/
function reverseStr(str,newStr= "",index=1) {
    if (newStr.length ==str.length){
        return newStr
    }
    if (str.length < 1){
        console.log("the issue is line 47")
        return newStr
    }
    newStr += str[str.length-index];
    return reverseStr(str, newStr,index+1)
}

console.log(reverseStr(str1));

/*****************************************************************************/

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

// const nums1 = [1, 3, 5, 6];
// const searchNum1 = 4;
// const expected1 = false;

// const nums2 = [4, 5, 6, 8, 12];
// const searchNum2 = 5;
// const expected2 = true;

// const nums3 = [3, 4, 6, 8, 12];
// const searchNum3 = 3;
// const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
//  function binarySearch(sortedNums, searchNum, index = Math.floor(sortedNums.length/2)) {
//     index = Math.floor(sortedNums.length/2)   
//     if (searchNum > ){
//         index++
//         if(searchNum == sortedNums[index]){
//             return True
//         }
//     }
//     if(searchNum < ){
//         index--
//         if(searchNum
//     }
// }