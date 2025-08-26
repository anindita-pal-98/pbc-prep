/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let arraylength = nums.length;
    let key = k % arraylength;  // if key is greater than array
    for (let i = 0; i < arraylength; i++) {
        temp[i] = nums[(i+key) % arraylength];
    }
    return temp;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    // Reverse the whole array
    nums.reverse();
    // Reverse first k elements
    let firstK = nums.slice(0, k).reverse();
    // Reverse the rest
    let rest = nums.slice(k).reverse();
    // Combine and modify in-place
    for (let i = 0; i < n; i++) {
        nums[i] = i < k ? firstK[i] : rest[i - k];
    }
};

let arr = [1,2,3,4,5];
rotate(arr, 3);
console.log(arr); // Output: [3, 4, 5, 1, 2]

console.log(rotate([1,2,3,4,5], 3))