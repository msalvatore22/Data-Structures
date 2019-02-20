// LeetCode 217: Contains Duplicates

var containsDuplicate = function(nums) {
  if(nums.length == 0) return false
  
  let map = {}

  for(let i = 0; i < nums.length; i++){
    if(!map[nums[i]]){
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++
    }
  }

  for(let num in map){
    if(map[num] > 1){
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1,2,3,1])) //returns true