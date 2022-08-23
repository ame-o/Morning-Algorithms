# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        pA = headA
        pB = headB
        while headA != headB:
            #Null does not exist in Python, must use None
            pA = headB if pA is None else pA.next 
            #turnary op allows you to skip reassigning statement twice
            pB = headA if pB is None else pB.next
        return pA

