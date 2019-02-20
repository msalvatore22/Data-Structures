// LeetCode 125: Valid Palindrome
var isPalindrome = function(s) {
  var reg = /[^\w]/ig;
      s = s.replace(reg, "").toLowerCase();
      return s === s.split("").reverse().join("");
  }

console.log(isPalindrome("A man, a plan, a canal: Panama")) //returns true