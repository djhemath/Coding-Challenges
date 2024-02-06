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