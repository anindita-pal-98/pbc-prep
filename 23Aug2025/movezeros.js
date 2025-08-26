/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zeros = 0;
  let i = 0;
  let n = nums.length-1;
  while (i <= n) {
    if(nums[i] == 0) {
        let temp = nums[i];
        nums[i] = nums[zeros];
        nums[zeros] = temp;
        i++;
        zeros++;
    }
    else if(nums[i] == 1) {
        i++;
    }
    else if(nums[i] == 2) {
        let temp = nums[i];
        nums[i] = nums[n];
        nums[n] = temp;
        n--;   
    }
  }  
};