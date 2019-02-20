// LeetCode 283: Move Zeros
var moveZeroes = function(nums) {
  for(var i = nums.length;i--;){
  if(nums[i]===0){
      nums.splice(i,1)
      nums.push(0);
  }
}
return nums
};

console.log(moveZeroes([0,1,0,3,12])) // returns [1,3,12,0,0]