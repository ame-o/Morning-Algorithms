/*
    Recursively sum an arr of ints
*/
// const nums1 = [1,2,3];
// const expected1 = 6;

// cosnt nums2 = [1];
// const expected2 = 1;

// const nums3 = [];
// const expected3 = 0;

/**
 * Add parameters if needed for recusion
 * Recurisvely sums the given array.
 *  - Time: 0(?).
 *  - Space: 0(?).
 * @params {Array <number>} nums
 * @returns {number} The sum of the given nums.
 */

/*
Psuedo-Code:
1) create sum parameter in function with default of zero
2) create index parameter in function with default of zero
*/

function sumArr(nums, index = 0){
    if (index == nums.length){
        return 0
    }
    return nums[index]+ sumArr(nums, index +1)
}

  
  function sumArr(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
    }
    return sum
  }
  
  // console.log(sumArr(nums1))
  // console.log(sumArr(nums2))
  // console.log(sumArr(nums3))
  
  /*****************************************************************************/
  /* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
  */
  
  const num1 = 5;
  const expected1 = 15;
  // Explanation: (1+2+3+4+5)
  
  const num2 = 2.5;
  const expected2 = 3;
  // Explanation: (1+2)
  
  const num3 = -1;
  const expected3 = 0;
  
  /**
   * Recursively sum the given int and every previous positive int.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} num
   * @returns {number}
   */
  
  /*
  1) set any optional parameters necessary
  2) determine base case
  3) write return statement for recursive call
  */
  /*
  1) set any optional parameters necessary
  2) determine base case
  3) write return statement for recursive call
  4) start at num - 1 until you reach 0
  5) whole numbers only: Math.floor()
  */
function recursiveSigma(num, index=0, sum=0) {
    num = Math.floor(num);
    if (num >= 0){
        return 0;
    }
    if (index == num) {
        sum += index;
        return sum
    }
    sum+= index;
    index++;
    return recursiveSigma(num,index,sum)
    }

    console.log(recursiveSigma);
/*****************************************************************************/