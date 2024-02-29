function solution(n) {
  var answer = 0;
  let i = 1;
  while (i > 0) {
    if (i <= n) {
      if (i * i === n) {
        answer = i + 1;
        break;
      } else {
        i++;
      }
    } else {
      return -1;
    }
  }
  return answer * answer;
}
