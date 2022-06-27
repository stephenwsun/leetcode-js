// Problem Link: https://leetcode.com/problems/maximum-subarray/
// Difficulty: Easy

// Solution: https://www.youtube.com/watch?v=tmakGVOGV3A

// Tip: Can be solved using Kadane's Algorithm
// Tip: Whenever you see a question that asks for the maximum or minimum of something, consider Dynamic Programming as a possibility
// Tip: Contiguous subarray just means a subarray of consecutive values in the array

// Time Complexity: O(N)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    max = Math.max(max, nums[i])
  }

  return max
};

// Alternate solution
var maxSubArrayAlt = function(nums) {
  if(nums.length == 0) return 0
  let result = Number.MIN_SAFE_INTEGER
  let sum = 0
  
  for(let i = 0; i < nums.length; i++) {
      sum += nums[i]
      result = Math.max(sum, result)
      sum = sum < 0 ? 0 : sum
  }

  return result
}