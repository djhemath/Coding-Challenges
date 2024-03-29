// https://leetcode.com/problems/reverse-linked-list/

const { ListNode, testLinkedListResults } = require('./common/linked-list');

// T -> O(n)
// S -> O(1)
function reverseList(head) {
  if(!head) {
    return null;
  }

  let previousNode = null;
  let currentNode = head;
  let nextNode = head.next;

  while(currentNode !== null) {
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;

    if(nextNode && nextNode.next) {
      nextNode = nextNode.next;
    } else {
      nextNode = null;
    }
  }

  return previousNode;
}

// T -> O(n)
// S -> O(n)
function reverseListRecursively(head) {
  if(head === null) {
    return null
  }

  let newHead = head;

  if(newHead.next) {
    newHead = reverseListRecursively(head.next);
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}

const test1ListNode3 = new ListNode(3);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1ResultExpected = [3, 2, 1];

// const test1Result1 = reverseList(test1List);
const test1Result2 = reverseListRecursively(test1List);

// console.log(testLinkedListResults(test1Result1, test1ResultExpected));
console.log(testLinkedListResults(test1Result2, test1ResultExpected));


const test2ListNode4 = new ListNode(2);
const test2ListNode3 = new ListNode(9, test2ListNode4);
const test2ListNode2 = new ListNode(15, test2ListNode3);
const test2ListNode1 = new ListNode(7, test2ListNode2);
const test2List = test2ListNode1;

const test2ResultExpected = [2, 9, 15, 7];

// const test2Result1 = reverseList(test2List);
const test2Result2 = reverseList(test2List);

// console.log(testLinkedListResults(test2Result1, test2ResultExpected));
console.log(testLinkedListResults(test2Result2, test2ResultExpected));


const test3ListNode1 = new ListNode(1);
const test3List = test3ListNode1;

const test3ResultExpected = [1];

// const test3Result1 = reverseList(test3List);
const test3Result2 = reverseList(test3List);

// console.log(testLinkedListResults(test3Result1, test3ResultExpected));
console.log(testLinkedListResults(test3Result2, test3ResultExpected));
