// https://leetcode.com/problems/contains-duplicate/

// O(n)
function containsDuplicate(nums) {
  const seen = {};

  for(let i=0; i<nums.length; i++) {
      const num = nums[i];

      if(seen[num]) {
          return true;
      } else {
          seen[num] = true;
      }

  }

  return false;
}

console.log(containsDuplicate([1,2,3,1]) === true);
console.log(containsDuplicate([1,2,3,4]) === false);
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]) === true);
