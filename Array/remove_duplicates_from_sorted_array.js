// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Solution Video: https://www.youtube.com/watch?v=DEJAZBq0FDA

// Tip: Non-decreasing order means increasing order or sorted order
// Tip: In-Place means without creating a new array and directly modifying the array passed to the function

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0
    let p2 = p1 + 1
    
    while (p2 < nums.length) {
        if (nums[p1] === nums[p2]) {
            p2++
        } else if (nums[p2] > nums[p1]) {
            p1++
            nums[p1] = nums[p2]
        } else {
            p2++
        }
    }

    p1++
    
    console.log(nums)
    console.log(p1)
    return p1
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])