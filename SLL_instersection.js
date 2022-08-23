/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let skipA = headA;
    let skipB = headB;
    while(skipA != skipB){//will break out if intersection is found or both lists end at null
        skipA = skipA ==null? headB: skipA.next;
        skipB =skipB ==null? headA: skipB.next;
    }

    return skipA;
    
};