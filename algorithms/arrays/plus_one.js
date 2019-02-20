// LeetCode 66: Plus One
var plusOne = function(digits) {
  const last_index = digits.length - 1;
  
  if (digits[last_index] <= 8) {
      digits[last_index]++;
      return digits
  }

  if (digits.length === 1) {
      return [1, 0];
  }

  digits = plusOne(digits.slice(0, -1));
  digits.push(0);
  return digits;
}

console.log(plusOne([4,3,2,1])) //returns [4,3,2,2]