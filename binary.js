/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;



/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
  var mid = Math.floor(sortedNums.length/ 2) 
  var isHere = false
  console.log(mid);
  if (sortedNums[mid] > searchNum) {
    for (var i = 0; i < mid; i++) {
      if (sortedNums[i] == searchNum) {
        isHere = true
      }
    }
  }
  else {
    for (var j = mid; j< sortedNums.length; j++) {
      if (sortedNums[j] == searchNum) {
        isHere = true
      }
    }
  }
  return isHere
}
// console.log(binarySearch(nums3, searchNum3));

// ----------------------------------------------------------------------------



/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected5 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected6 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected7 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected8 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interweaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interweaved items.
*/
function interweaveArrays(arr1, arr2) {
  var newArr = []
  for(var i = 0, j = 0;i<arr1.length,j<arr2.length; i++,j++) {
    newArr.push(arr1[i])
    newArr.push(arr2[j])
  }
  return newArr
}  
console.log(interweaveArrays(arrA3,arrB3));
