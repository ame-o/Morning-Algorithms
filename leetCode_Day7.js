/**
 * @param {number[]} height
 * @return {number}
 */
let arr = [1,8,6,2,5,4,8,3,7]
var maxArea = function(arr) {
    let maxArea = 0;
    let left = 0;
    let right = arr.length - 1;
        while(left < right){
            let length = right - left
            let height = Math.min(arr[left],arr[right])
            let area = height * length
            maxArea = Math.max(maxArea,area)
            if(arr[left] <= arr[right]){
                left++;
            } else {
                right--;
            }
        }
    return maxArea;
};
// console.log(maxArea(arr));


let nums = [0,0,0,0,0,0]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let output = []    
    let i = 0
    let j = nums.length-2
    let k = nums.length-1
    while(i< j && j < k){
        if(-1*nums[i] > nums[j] + nums[k]){
            i++;
        }
        if(-1*nums[i]<nums[j]+nums[k]){
            j--;
        }
        if(nums[i] + nums[j] + nums[k] == 0){
            // let temp=[nums[i], nums[j], nums[k]]
            output.push([nums[i], nums[j], nums[k]]);
            if(output !== []){
                for(let a = 0; a < 2; a++){
                    for(let b = 0; b < output.length; b++){

                        if(output[a][b] !== nums[i]
                        && output[a][b] !== nums[j]
                        && output[a][b] !== nums[k]){
                            return true;
                        };
                    };
            };
            return false;
            }
            k--;
            j=k-1
        }
    }
    return output;
};
console.log(threeSum(nums));


