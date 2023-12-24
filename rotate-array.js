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

const test1 = getTestData();

testResults(rotateArray, test1.test1, test1.test1k, test1.test1Res);
testResults(rotateArray, test1.test2, test1.test2k, test1.test2Res);


function rotateArrayByReversing(nums, k) {
  const reverseArray = (start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
  };

  const numberOfRotations = k % nums.length;

  reverseArray(0, nums.length - 1);
  reverseArray(0, numberOfRotations - 1);
  reverseArray(numberOfRotations, nums.length - 1);
}

const test2 = getTestData();

testResults(rotateArrayByReversing, test2.test1, test2.test1k, test2.test1Res);
testResults(rotateArrayByReversing, test2.test2, test2.test2k, test2.test2Res);


// Tests
function testResults(func, nums, k, expected) {
  func(nums, k);

  for(i=0; i<nums.length; i++) {
    console.log(nums[i] === expected[i]);
  }
}

function getTestData() {
  const test1 = [1,2,3,4,5,6,7]
  const test1k = 3;
  const test1Res = [5,6,7,1,2,3,4];

  const test2 = [-1,-100,3,99];
  const test2k = 2;
  const test2Res = [3,99,-1,-100];

  return {
    test1,
    test1k,
    test1Res,
    test2,
    test2k,
    test2Res,
  };
}