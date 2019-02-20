// LeetCode 1: Two Sum
var twoSum = function(nums, target) {
  let result = []
  for(let i=0; i < nums.length; i++){
      for(let j = i + 1; j < nums.length; j++){
          if(nums[j] == target - nums[i]){
              result.push(i, j)
          }
      }
  }
  
  return result
};

console.log(twoSum([2,7,11,15], 9)) //returns [0,1]