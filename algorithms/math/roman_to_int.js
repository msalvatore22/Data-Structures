//LeetCode 13: Roman to Integer

var romanToInt = function(s) {
    let hash = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }

    let result = 0

    for(let i = 0; i < s.length; i++){
      if(hash[s[i]] > hash[s[i+1]]){
        result += hash[s[i]]
      } else if (hash[s[i]] < hash[s[i+1]]){
        result += (hash[s[i+1]] - hash[s[i]])
        i++
      } else {
        result += hash[s[i]]
      }
    }

    return result
};

console.log(romanToInt('MCMXCIV'))