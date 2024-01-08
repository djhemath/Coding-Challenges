// https://leetcode.com/problems/palindrome-linked-list

const { ListNode } = require("../common/linked-list");

// T -> O(n)
// S -> O(n)
function isPalindrome(head) {
  const allElements = [];

  let currentNode = head;

  while(currentNode) {
    allElements.push(currentNode.val);
    currentNode = currentNode.next;
  }

  currentNode = head;
  allElements.reverse();
  let i=0;

  while(currentNode) {
    if(allElements[i] !== currentNode.val) {
      return false;
    }

    i += 1;
    currentNode = currentNode.next;
  }

  return true
}

const test1ListNode4 = new ListNode(1);
const test1ListNode3 = new ListNode(2, test1ListNode4);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1Result1 = isPalindrome(test1List);

console.log(test1Result1 === true);


const test2ListNode2 = new ListNode(2);
const test2ListNode1 = new ListNode(1, test2ListNode2);
const test2List = test2ListNode1;

const test2Result1 = isPalindrome(test2List);

console.log(test2Result1 === false);


const test3ListNode1 = new ListNode(1);
const test3List = test3ListNode1;

const test3Result1 = isPalindrome(test3List);

console.log(test3Result1 === true);
