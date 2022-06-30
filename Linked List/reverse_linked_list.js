// Problem Link: https://leetcode.com/problems/reverse-linked-list/
// Difficulty: Easy

// Tip: Keep track of previous, current, and next positions

// Iterative Approach
// Time Complexity: O(N)
// Space Complexity: O(1)

// Recursive Approach
// Time Complexity: O(N)
// Space Complexity: O(N)

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

// Iterative
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

// ES6
var reverseListAlt = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

// Recursive
var reverseListAlt2 = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};