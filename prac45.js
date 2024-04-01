function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  var answer = 0;
  for (let j = 1; j <= n; j++) {
    if (isPrime(j) === true) answer++;
  }
  return answer;
}
