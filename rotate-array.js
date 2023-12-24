// https://leetcode.com/problems/rotate-array/

// O(n)
function rotateArray(nums, k) {
  const rotatedArray = new Array(nums.length);

  for(let i=0; i < nums.length; i++) {
    const newIndex = (i+k) % nums.length;
    rotatedArray[newIndex] = nums[i];
  }

  for(let i=0; i<nums.length; i++) {
    nums[i] = rotatedArray[i];
  }
}


// Tests
function testResults(func, nums, k, expected) {
  func(nums, k);

  for(i=0; i<nums.length; i++) {
    console.log(nums[i] === expected[i]);
  }
}

const test1 = [1,2,3,4,5,6,7]
const test1k = 3;
const test1Res = [5,6,7,1,2,3,4];

const test2 = [-1,-100,3,99];
const test2k = 2;
const test2Res = [3,99,-1,-100];

testResults(rotateArray, test1, test1k, test1Res);
testResults(rotateArray, test2, test2k, test2Res);