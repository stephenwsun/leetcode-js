// Problem Link: https://leetcode.com/problems/contains-duplicate/
// Difficulty: Easy

// Solution: https://www.youtube.com/watch?v=C-WgQDqOxHs

// Tip: Use an object to keep track of the number in each iteration

// Time Complexity: O(N)
// Space Complexity: O(N)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let lookup = {}
    
    for (let i = 0; i < nums.length; i++) {
      if (lookup[nums[i]]) return true
      else {
          lookup[nums[i]] = true
      }
    }
    
    return false
};