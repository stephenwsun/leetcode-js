// Problem Link: https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
// Difficulty: Medium

// Solution Video: https://www.youtube.com/watch?v=sQNN4xKC1mA

// Tip: This is a popular Facebook interview question
// Tip: Hashmap is not the best solution
// Tip: If only one of the vectors is sparse, take a binary search approach

// Time Complexity: O(N + M)
// Space Complexity: O(N + M)

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums = []
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.nums.push([i, nums[i]])
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    // this.nums gives us access to its own vector nums
    // vec.nums gives us access to the vector nums that are passed in
    
    let p1 = 0
    let p2 = 0
    let dotProduct = 0
    
    while (p1 < this.nums.length && p2 < vec.nums.length) {
        const [p1Idx, p1Val] = this.nums[p1]
        const [p2Idx, p2Val] = vec.nums[p2]
        
        if (p1Idx === p2Idx) {
            dotProduct += p1Val * p2Val
            p1++
            p2++
        } else if (p1Idx > p2Idx) {
            p2++
        } else {
            p1++
        }
    }

    return dotProduct
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);