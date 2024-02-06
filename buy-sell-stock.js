// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function getMaxProfit (prices=[]) {
  let leftPointer = 0;
  let rightPointer = 0;
  let maxProfit = 0;

  while(rightPointer < prices.length) {
      if(prices[leftPointer] < prices[rightPointer]) {
          const profit = prices[rightPointer] - prices[leftPointer]
          if(profit > maxProfit) {
              maxProfit = profit
          }
      } else {
          leftPointer = rightPointer;
      }

      rightPointer += 1;
  }

  return maxProfit;
};

console.log(getMaxProfit([7,1,5,3,6,4]) === 5)
console.log(getMaxProfit([7,6,4,3,1]) === 0)
console.log(getMaxProfit([7,2,10,6,1,2]) === 8)