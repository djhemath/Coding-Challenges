
// Sub array size = 3
function maxSumOfContigousSubArray(array = []) {
  let leftPointer = 0;
  let rightPointer = 2;

  let maxSum = 0;

  if(array.length < 3) {
    return 0;
  }

  maxSum = array[0] + array[1] + array[2];

  leftPointer += 1;
  rightPointer += 1;

  while(rightPointer < array.length) {
    const newMaxSum = (maxSum - array[leftPointer-1]) + array[rightPointer];

    if(newMaxSum > maxSum) {
      maxSum = newMaxSum;
    }

    leftPointer += 1;
    rightPointer += 1;
  }

  return maxSum;
}

console.log(maxSumOfContigousSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0]) === 16)



function maxSumOfContigousSubArray2(array = [], k) {
  let maxSum = 0;
  let currentSum = 0;

  for(let i=0; i<array.length; i++) {
    if(i < k) {
      currentSum += array[i];
    } else {
      currentSum = currentSum - array[i-k] + array[i];
    }

    if(currentSum > maxSum) {
      maxSum = currentSum;
    }

  }

  return maxSum;
}

console.log(maxSumOfContigousSubArray2([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3) === 16)