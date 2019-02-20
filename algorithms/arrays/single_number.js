// LeetCode 136: Single Number
var singleNumber = function(nums) {
  let hash = {}
  
  nums.forEach(num => {
      hash[num] = hash[num]+1 || 1
  })
  
  for(num in hash){
      if(hash[num] === 1){
          return num
      }
  }
  
};

console.log(singleNumber([4,1,2,1,2])) //returns 4