// https://leetcode.com/problems/two-sum/

// O(n^2)
function twoSum(nums, target) {
  for(let i=0; i<nums.length; i++) {
    const num = nums[i];

    if(num > target) {
        continue;
    }

    for(let j=i+1; j<nums.length; j++) {
        const innerNum = nums[j];

        if((num + innerNum) === target) {
            return [i, j]
        }
    }
  }
}

const test1 = twoSum([2, 7, 11, 15], 9);
console.log(test1[0] === 0 && test1[1] === 1);

const test2 = twoSum([3, 2, 4], 6);
console.log(test2[0] === 1 && test2[1] === 2);

const test3 = twoSum([3, 3], 6);
console.log(test3[0] === 0 && test3[1] === 1);