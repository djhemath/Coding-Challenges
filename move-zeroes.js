// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums) {
  let j=0;
  for(let i=0; i < nums.length; i++) {
      const num = nums[i];

      if(num != 0) {
          if(i != j) {
              nums[j] = num;
              nums[i] = 0;
          }

          j += 1;
      }
  }
}

const nums1 = [0,1,0,3,12];
moveZeroes(nums1);
console.log(nums1[0] === 1);
console.log(nums1[1] === 3);
console.log(nums1[2] === 12);
console.log(nums1[3] === 0);
console.log(nums1[4] === 0);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2[0] === 0);

const nums3 = [1, 2, 3, 4, 0, 0, 0];
moveZeroes(nums3);
console.log(nums3[0] === 1);
console.log(nums3[1] === 2);
console.log(nums3[2] === 3);
console.log(nums3[3] === 4);
console.log(nums3[4] === 0);
console.log(nums3[5] === 0);
console.log(nums3[6] === 0);

const nums4 = [0, 0, 1, 2, 0, 3, 4];
moveZeroes(nums4);
console.log(nums4[0] === 1);
console.log(nums4[1] === 2);
console.log(nums4[2] === 3);
console.log(nums4[3] === 4);
console.log(nums4[4] === 0);
console.log(nums4[5] === 0);
console.log(nums4[6] === 0);