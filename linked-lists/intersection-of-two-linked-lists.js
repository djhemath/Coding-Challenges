// https://leetcode.com/problems/intersection-of-two-linked-lists/

const { ListNode } = require("../common/linked-list");

// T - O(n)
// S - O(n)
function getIntersectionNode(headA, headB) {
  const list1VisitedNodes = new Set();

  let currentNode = headA;

  while(currentNode) {
    list1VisitedNodes.add(currentNode)
    currentNode = currentNode.next;
  }

  currentNode = headB;

  while(currentNode) {
    if(list1VisitedNodes.has(currentNode)) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}

const test1CommonNode1 = new ListNode(8);
const test1CommonNode2 = new ListNode(4);
const test1CommonNode3 = new ListNode(5);

test1CommonNode1.next = test1CommonNode2;
test1CommonNode2.next = test1CommonNode3;
test1CommonNode3.next = null;


const test1List1Node1 = new ListNode(4);
const test1List1Node2 = new ListNode(1);

test1List1Node1.next = test1List1Node2;
test1List1Node2.next = test1CommonNode1;


const test1List2Node1 = new ListNode(5);
const test1List2Node2 = new ListNode(6);
const test1List2Node3 = new ListNode(1);

test1List2Node1.next = test1List2Node2;
test1List2Node2.next = test1List2Node3;
test1List2Node3.next = test1CommonNode1;

const test1Result1 = getIntersectionNode(test1List1Node1, test1List2Node1);

console.log(test1Result1 === test1CommonNode1);



const test2CommonNode1 = new ListNode(2);
const test2CommonNode2 = new ListNode(4);

test2CommonNode1.next = test2CommonNode2;
test2CommonNode2.next = null;


const test2List1Node1 = new ListNode(1);
const test2List1Node2 = new ListNode(9);
const test2List1Node3 = new ListNode(1);

test2List1Node1.next = test2List1Node2;
test2List1Node2.next = test2List1Node3;
test2List1Node3.next = test2CommonNode1;


const test2List2Node1 = new ListNode(3);

test2List2Node1.next = test2CommonNode1;

const test2Result1 = getIntersectionNode(test2List1Node1, test2List2Node1);

console.log(test2Result1 === test2CommonNode1);



const test3List1Node1 = new ListNode(2);
const test3List1Node2 = new ListNode(6);
const test3List1Node3 = new ListNode(4);

test3List1Node1.next = test3List1Node2;
test3List1Node2.next = test3List1Node3;
test3List1Node3.next = null;


const test3List2Node1 = new ListNode(1);
const test3List2Node2 = new ListNode(5);

test3List2Node1.next = test3List2Node2;
test3List2Node2.next = null;

const test3Result1 = getIntersectionNode(test3List1Node1, test3List2Node1);

console.log(test3Result1 === null);
