//LeetCode 189: Rotate Array
var rotate = function(nums, k) {
  let i = 0;

  while(i < k){
    let pop = nums.pop()
    nums.unshift(pop)
    i++
  }

  return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3)) //returns [5,6,7,1,2,3,4]