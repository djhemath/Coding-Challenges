// https://www.interviewbit.com/problems/pick-from-both-sides/

// T -> O(2B) -> O(B) -> O(n)
// S -> O(2B) -> O(B) -> O(n)
function maxSum(A, B){
  let leftArray = A.slice(0, B);
  let rightArray = A.slice(A.length-B-1, A.length);
  
  let maxSum = -Infinity;
  
  let currentSum = 0;
  
  const newArray = [...leftArray.reverse(), ...rightArray.reverse()];
  
  for(let i=0; i<newArray.length; i++) {
      if(i < B) {
          currentSum += newArray[i];
          continue;
      }
      
      if(currentSum > maxSum) {
          maxSum = currentSum;
      }
      
      currentSum = currentSum - newArray[i-B] + newArray[i];
  }
  
  return maxSum;
}

console.log(maxSum([5, -2, 3 , 1, 2], 3) === 8);
console.log(maxSum([1, 2], 1) === 2);
console.log(maxSum([5, -2, 3 , 1, 2], 5) === 9);

// T -> O(B)
// S -> O(1)
function maxSum2(A, B) {
  let sum = 0;

  for(let i=0; i<B; i++) {
    sum += A[i];
  }

  let maxSum = sum;

  let i = B - 1;
  let j = A.length - 1;

  while(i >= 0) {
    sum -= A[i];
    i -= 1;

    sum += A[j];
    j -= 1;

    if(sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(maxSum2([5, -2, 3 , 1, 2], 3) === 8);
console.log(maxSum2([1, 2], 1) === 2);
console.log(maxSum2([5, -2, 3 , 1, 2], 5) === 9);