// Problem Link: https://leetcode.com/problems/add-two-numbers/
// Difficulty: Medium

// Solution 1: https://www.youtube.com/watch?v=zaJhgYbN9h0
// Solution 2: https://www.youtube.com/watch?v=3cTFm2uWrps

// Tip: Set head of resulting linked list initially to a dummy node
// Tip: Keep track of carry and account for carry after the last summed digits

// Time Complexity: O(M + N)
// Space Complexity: O(N)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /*
        1. Create pointers for each linked list
        2. loop through each value in linked lists and calculate sum
        3. Keep track of carry if sum is greater than 10
        4. Add extra node at the end of list if there's a leftover carry
    */
    
    let p1 = l1
    let p2 = l2
    
    let result = new ListNode(0)
    let head = result
    let carry = false
    
    while (p1 || p2) {
        let sum = 0

        if (!p1) {
            sum += p2.val
            p2 = p2.next
        } else if (!p2) {
            sum += p1.val
            p1 = p1.next
        } else {
            sum += (p1.val + p2.val)
            p1 = p1.next
            p2 = p2.next
        }
        
        if (carry) sum++
        
        if (sum >= 10) {
            sum %= 10
            carry = true
        } else {
            carry = false
        }
        
        const newNode = new ListNode(sum)
        head.next = newNode
        head = head.next
    }
           
    if (carry) {
        const newNode = new ListNode(1)
        head.next = newNode
        head = head.next
    } 
           
    return result.next      
    
};