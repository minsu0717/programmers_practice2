function solution(n) {
  var answer = "";
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      answer += "수";
      i++;
    } else {
      answer += "박";
      i++;
    }
  }
  return answer;
}
