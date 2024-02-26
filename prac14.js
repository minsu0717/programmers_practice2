function solution(arr, divisor) {
  var answer = [];
  for (num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }

  if (answer.length === 0) {
    answer = [-1];
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}
