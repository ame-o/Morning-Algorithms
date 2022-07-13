/**
 * @param {number[]} nums
 * @return {number[]}
 */

//104ms Version
let nums = [-10,3,7]
var runningSum = function(nums) {
    for(let i = 0; i < nums.length-1; i++){
        nums[i+1]= nums[i]+ nums[i+1];
    }
    return nums;
};

// console.log(runningSum(nums))

/*
=============================================
/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 

Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/
*/

// let left = 0
// let pivot = nums[0]
// let endpoint= nums.length
// nums.reduce((a,b) => a+b,nums[pivot+1])

// we broke it at nums = [-2,-1,-1,-1,-1,-2]
function pivotIndex(nums) {
    let right = 0
    let left = 0
    for(let i=nums.length-1; i > 0 ; i--) {
        right+= nums[i];
        left= 0;
        for(let j=0; j < i-1;j++){
            left+= nums[j];
            console.log("left:" + left);
            console.log("right:"+right);
            if(left === right){
                console.log("yay "+ "left:" + left+" right:"+right)
                return (j+1);
            }
        }
    }
    if(right==0){
        return 0
    }
    return -1
}

// console.log(pivotIndex(nums))

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex2 = function(nums) {
    if(nums.length === 0) return -1;
    if(nums.length === 1) return 0;
    
    const totalSum = nums.reduce((a, b) => a +b,0); //28
    let leftSum = 0;

    for(i = 0; i < nums.length; i++) {
        if(leftSum === totalSum - leftSum - nums[i]) {
            //no need for a rightSum when you can just subtract from totalSum
            return i;
        }
        leftSum += nums[i];
    };

    return -1;
};
console.log(pivotIndex2(nums))
