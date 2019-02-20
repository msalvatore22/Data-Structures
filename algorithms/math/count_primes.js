var countPrimes = function(n) {
    let primes = [];
    let sieve = []
    let j;
    let i;
    for (i = 2; i <= n; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= n; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes.length;
}

console.log(countPrimes(10))