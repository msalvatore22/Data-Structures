var isPowerOfThree = function(n) {
  let x = 1;
  if(n === 3 || n === 1) return true
  if(n === 0) return false
  while(x <= 20){
    if(Math.pow(3, x) === n){
      return true
    } else {
      x++
    }
  }

  return false
  
};

console.log(isPowerOfThree(243)) // returns true