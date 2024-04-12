function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        cnt++;
        if (j * j !== i) cnt++;
      }
    }
    if (cnt <= limit) {
      answer += cnt;
    } else {
      cnt = power;
      answer += cnt;
    }
  }

  return answer;
}
