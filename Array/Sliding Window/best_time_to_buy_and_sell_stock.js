// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Difficulty: Easy

// Solution: https://www.youtube.com/watch?v=1pkOgXD63yU

// Tip: Track when to buy (lowest) and when to sell (max profit)

// Time Complexity: O(N)
// Space Complexity: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */

// Approach 1: Iteration
var maxProfit = function(prices) {
  let low = prices[0]
  let profit = 0
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i]
    } else {
      if (prices[i] - low > profit) {
        profit = prices[i] - low
      }
    }
  }
  
  return profit
};

// Approach 2: Two Pointers
var maxProfitAlt = function(prices) {
  let left = 0
  let right = 1
  let profit = 0
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const diff = prices[right] - prices[left]
      profit = Math.max(diff, profit)
    } else {
      left = right
    }
    
    right++
  }
  
  return profit
};