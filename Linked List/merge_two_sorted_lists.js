// Problem Link: https://leetcode.com/problems/design-underground-system/
// Difficulty: Easy

// Solution: https://www.youtube.com/watch?v=XIdigk956u0

// Tip1: Use pointers to traverse linked lists
// Tip2: Leftover nodes of the longer linked list can be appended at the end

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let result = new ListNode(0)
  let p1 = list1
  let p2 = list2
  let p3 = result
  
  if (!p1 && !p2) return null
  if (!p1) return p2
  if (!p2) return p1
  
  while(p1 && p2) {
    if (p1.val < p2.val) {
      p3.next = p1
      p1 = p1.next
    } else {
      p3.next = p2
      p2 = p2.next
    }
    
    p3 = p3.next
  }
  
  if (p1) p3.next = p1
  else if (p2) p3.next = p2
  
  return p3.next
};