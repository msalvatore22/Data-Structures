// LeetCode 242 Valid Anagram
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  
  let sHash = {}
  let tHash = {}

  for(let i = 0; i < s.length; i++){
    sHash[s[i]] = sHash[s[i]]+1 || 1
  }

  for(let i = 0; i < t.length; i++){
    tHash[t[i]] = tHash[t[i]]+1 || 1
  }

  for(let i = 0; i < s.length; i ++){
    var propname = s[i]

    if(sHash[propname] !== tHash[propname]){
      return false
    }
  }
  return true
};

console.log(isAnagram('anagram', 'nagaram')) //true