/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any. 3
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
      having 2 pointers and while loops
      if the numbers are in the right place, move the pointers
      if the numbers are NOT in the right place, we swap & move the pointers
      keep doing it until we checked all indexes
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// original : [11, 8, 14, 3, 6, 2, 7]
// pick the middle index & pivot
// 



// new.    :  [ 3, 6, 2, 7, 11, 8, 14]
// return the pivot index :3

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
        let pivot = Math.floor(nums.length/2)
        let i= left
        let j = right
        while (i<=j) {
            while (nums[i] < nums[pivot]) {
            i++;
            }
            while(nums[j] > nums[pivot]) {
            j--;
            }
            if (i <= j) {
            swap(nums, i, j);
            i++;
            j--;
            // return i;
            }
          // swap(nums, i, j);
          // i++
          // j--
        }
        return nums;
}
console.log(partition(nums1))


function quickSort(nums){
    if (nums.length <=1) {
        return nums
    }
    //finding middle pivot
    let pivot = Math.floor(nums.length/2)
    let lessThan = []
    let equalTo = []
    let greaterThan = []
    //loop nums to check if less or greater than pivot to push in arr
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] < nums[pivot]) {
        //less than move push to arr
        lessThan.push(nums[i])
        } else if (nums[i] > nums[pivot]) {
        //more than move push to arr
        greaterThan.push(nums[i])
        } else {
        equalTo.push(nums[i])
        }
    }

    let newArr = []
    // concat all the arrays starting for less than to middle to greater than
    return newArr.concat(quickSort(lessThan), equalTo, quickSort(greaterThan))
}
console.log(quickSort(nums2))