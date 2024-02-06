// https://www.interviewbit.com/problems/max-non-negative-subarray/

// T -> O(n)
// S -> O(1)
function maxSet(A){
  let maxSum = -1;
  let maxSubArray = [];
  
  let currentSum = 0;
  let currentSubArray = [];

  for(let i=0; i<A.length; i++) {
      if(A[i] >= 0) {
          currentSum += A[i];
          currentSubArray.push(A[i]);
      } else {
          // Reached a negative number, previous elements are sub array
          if(currentSum > maxSum) {
              maxSum = currentSum;
              maxSubArray = [...currentSubArray];
          }
          
          currentSum = 0;
          currentSubArray = [];
      }
  }
  
  if(currentSum > maxSum) {
      maxSubArray = [...currentSubArray];
  }
  
  return maxSubArray;
}

const result1 = maxSet([1, 2, 5, -7, 2, 3]);
console.log(result1[0] === 1);
console.log(result1[1] === 2);
console.log(result1[2] === 5);
console.log(result1.length === 3);

const result2 = maxSet([10, -1, 2, 3, -4, 100]);
console.log(result2[0] === 100);
console.log(result2.length === 1);