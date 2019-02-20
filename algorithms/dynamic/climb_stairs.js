//LeetCode 70: Climbing Stairs

const climbStairs = function(n) {
  if (n === 0) return 1
  
  let begin = 0
  let end = 1
  let result = 0
  for (let i = 1; i <= n; i++) {
      result = begin + end
      begin = end
      end = result
  }
  
  return result
};

console.log(climbStairs(6)) //returns 13
