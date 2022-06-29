// Problem Link: https://leetcode.com/problems/reverse-linked-list/
// Difficulty: Easy

// Tip: Keep track of previous, current, and next positions

// Time Complexity: O(N)
// Space Complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null
  
  let prev = null
  let curr = head
  
  while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  
  return prev
};