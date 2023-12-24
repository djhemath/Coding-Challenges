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

const test4 = twoSumBest([-3, 4, 3, 90], 0);
console.log(test4[0] === 0 && test4[1] === 2);



// O(N)
function twoSumBest(nums, target) {
  const nextPossibleNumber = new Map();

  for(let i=0; i<nums.length; i++) {
      const num = nums[i];

      if(nextPossibleNumber.has(num)) {
          return [nextPossibleNumber.get(num), i];
      } else {
          nextPossibleNumber.set((target-num), i);
      }
  }
}

const test1Best = twoSumBest([2, 7, 11, 15], 9);
console.log(test1Best[0] === 0 && test1Best[1] === 1);

const test2Best = twoSumBest([3, 2, 4], 6);
console.log(test2Best[0] === 1 && test2Best[1] === 2);

const test3Best = twoSumBest([3, 3], 6);
console.log(test3Best[0] === 0 && test3Best[1] === 1);

const test4Best = twoSumBest([-3, 4, 3, 90], 0);
console.log(test4Best[0] === 0 && test4Best[1] === 2);
