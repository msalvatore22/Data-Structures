//LeetCode 387: First Unique Character in a string
var firstUniqChar = function(s) {
  if(s.length == 0) return -1
  
  let hash = {};
  
  for(let i = 0; i < s.length; i ++){
      if(!hash[s[i]]){
          hash[s[i]] = 0;
      }
      hash[s[i]] += 1
  }
  
  for(let letter in hash){
    if(hash[letter] == 1){
      return s.indexOf(letter)
    }
  }
  return -1
  
};

console.log(firstUniqChar('leetcode')) //returns 0