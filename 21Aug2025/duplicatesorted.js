// function removeduplicate(arr) {
//     let arr1 = [];
    
//     for(let i = 0; i< arr.length; i++) {
//         if(arr[i]!= arr[i+1]) {
//             arr1.push(arr[i]);
//         }
//     }

//     return arr1;
// }

// console.log(removeduplicate([1,1,2]))


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[i]!== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }

    return nums;
};

console.log(removeDuplicates([1,1,2,2,2,3,3,3,3]))