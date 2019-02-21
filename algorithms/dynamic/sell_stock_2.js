//LeetCode 122: Best Time to Buy and Sell Stock II

var maxProfit = function(prices) {
  if(prices.length < 1) return 0
  let result = [];
  let i = 0;
  let j = 1
  while(j < prices.length){
    if(prices[i] >= prices[j]){
      i = j
      j++
    }
    if(prices[i] <= prices[j]){
      let diff = prices[j] - prices[i]
      result.push(diff)
      i = j
      j++
    }
  }

  let ans = 0

  for(let x = 0; x<result.length; x++){
    ans += result[x]
  }
  return ans
};

 console.log(maxProfit([7,1,5,3,6,4])) //returns 7