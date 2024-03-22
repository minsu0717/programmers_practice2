function solution(s) {
  var answer = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) === -1) {
      answer.push(-1);
      str += s[i];
    } else {
      answer.push(i - str.lastIndexOf(s[i]));
      str += s[i];
    }
  }
  return answer;
}
