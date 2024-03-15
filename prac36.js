function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  var answer = [];
  const num1 = Math.max(n, m);
  const num2 = Math.min(n, m);
  answer.push(gcd(num1, num2), lcm(num1, num2));
  return answer;
}
