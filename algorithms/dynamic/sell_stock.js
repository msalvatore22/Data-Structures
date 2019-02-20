//LeetCode Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
  if(prices.length < 1) return 0
  let result = 0;
  let i = 0;
  let j = 1
  while(j < prices.length){
    if(prices[i] >= prices[j]){
      prices[i] = prices[j]
      j++
    }
    if(prices[i] <= prices[j]){
      let diff = prices[j] - prices[i]
      if(diff > result) result = diff
      j++
    }
  }

  return result
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9])) // returns 9