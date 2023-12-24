// https://leetcode.com/problems/maximum-subarray/

// O(N)
function maxSubArray(nums) {
  let currentSum = 0;
  let max = -Infinity;

  if(nums.length === 1) {
      return nums[0];
  }

  for(let i=0; i<nums.length; i++) {

      currentSum += nums[i];

      if(currentSum > max) {
          max = currentSum;
      }

      if(currentSum < 0) {
          currentSum = 0;
      }
  }

  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) === 6)
console.log(maxSubArray([1]) === 1)
console.log(maxSubArray([5,4,-1,7,8]) === 23)
console.log(maxSubArray([-2,-1]) === -1)
console.log(maxSubArray([-1]) === -1)