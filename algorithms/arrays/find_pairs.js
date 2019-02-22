//LeetCode 532: K-Diff Pairs in Array
var findPairs = function(nums, k){
  if(k < 0) return 0
  let hash = {};
  let uArr = [];
  let uHash = {}
  let counter = 0;

  for(let i = 0; i < nums.length; i++){
    if(uHash[nums[i]] !== nums[i]){
      uArr.push(nums[i])
      uHash[nums[i]] = nums[i]
    }
  }

  if(k === 0){
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]]+1 || 1
    }
      
    for(num in hash){
        if(hash[num] > 1){
            counter ++
        }  
    }
    return counter
  } 
    
  for(let i = 0; i < uArr.length; i++){
      hash[uArr[i] + k] = uArr[i]
    }

  for(let j = 0; j < uArr.length; j++){
    if(uArr[j] in hash){
      
      counter ++
      }
    }
    
  return counter
}