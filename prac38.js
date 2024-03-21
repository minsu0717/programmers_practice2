function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = i + 2; k < number.length; k++) {
        if (j !== k && j < k) {
          if (number[i] + number[j] + number[k] === 0) {
            answer++;
          } else {
            answer += 0;
          }
        }
      }
    }
  }
  return answer;
}
