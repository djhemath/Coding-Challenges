// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

const { ListNode, testLinkedListResults } = require('../common/linked-list');

// T - (n)
// S - (1)
function deleteDuplicates(head) {
  let previousNode = head;
  let currentNode = head;

  while(currentNode) {
    if(previousNode.val === currentNode.val) {
      previousNode.next = currentNode.next;
    } else {
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return head;
};

const test1ListNode3 = new ListNode(2);
const test1ListNode2 = new ListNode(1, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1ResultExpected = [1, 2];

const test1Result1 = deleteDuplicates(test1List);

console.log(testLinkedListResults(test1Result1, test1ResultExpected));


const test2ListNode5 = new ListNode(3);
const test2ListNode4 = new ListNode(3, test2ListNode5);
const test2ListNode3 = new ListNode(2, test2ListNode4);
const test2ListNode2 = new ListNode(1, test2ListNode3);
const test2ListNode1 = new ListNode(1, test2ListNode2);
const test2List = test2ListNode1;

const test2ResultExpected = [1, 2, 3];

const test2Result1 = deleteDuplicates(test2List);

console.log(testLinkedListResults(test2Result1, test2ResultExpected));
