//LeetCode 350: Intersection of two Arrays
var intersect = function(nums1, nums2) {
  let obj = {}
  let res = []
  nums1.forEach((num) => {
    obj[num] = obj[num]+1 || 1
  })
  nums2.forEach((num) => {
    if(obj[num] && obj[num]>0) {
      res.push(num)
      obj[num]--
    }
  })
  return res  
};

console.log(intersect([4,9,5], [9.4,9,8,4])) //returns [9,4]