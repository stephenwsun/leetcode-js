// Problem Link: https://leetcode.com/problems/linked-list-cycle/
// Difficulty: Easy

// Solution: https://leetcode.com/problems/linked-list-cycle/discuss/1829768/JavaScript-Easy-to-understand-slow-and-fast-pointers-detailed-explanation

// Tip: Utilize a slow and fast pointer to check for cycle

// Time Complexity: O(N)
// Space Complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    /*
        Input: head = [3,2,0,-4], pos = 1
        Output: true
        
        1. Create a pointer to track position as we traverse
        2. Store value in array
        3. Traverse the linked list
        4. Since we don't know when the cycle occurs, we will compare values and see if it exists in array
    */
    
    let slow = head
    let fast = head
    
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    
    return false
};