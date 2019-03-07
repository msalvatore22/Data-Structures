var dominantIndex = function(nums) {
  let lar = Math.max(...nums)
  let larIndex = nums.indexOf(lar)
  for(let i=0; i<nums.length; i++) {
      if(nums[i]*2 > lar && nums[i] != lar) {
          return -1
      }
  }
  return larIndex
};

// var dominantIndex = function(nums) {
//   let maxIdx = 0, max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] > max) {
//           max = nums[i]
//           maxIdx = i;            
//       }
//   }
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] == max || nums[i]*2 <= max)
//           continue;
//       else
//           return -1;
//   }
//   return maxIdx;
// };