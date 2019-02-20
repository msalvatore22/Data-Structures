// LeetCode 8: String to interger (atoi)
var myAtoi = function(str) {
  let trim = str.trim()
  let numArr = []
  let maxNum = Math.pow(2,31) - 1
  let minNum = -Math.pow(2,31)
  var reg = /^[a-z]+$/i
  let i = 0;
  while(reg.test(trim[i]) == false){
      numArr.push(trim[i])
      i++
  }
  if(reg.test(trim[0]) == true) return 0
  if(numArr.length === 0) return 0
  let ans = parseInt(numArr.join(''))
  if(ans <= minNum) return minNum
  if(ans >= maxNum) return maxNum
  if(isNaN(ans)) return 0
  return ans
};

console.log(myAtoi("  -0012a42")) //returns -12