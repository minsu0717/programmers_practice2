function solution(s) {
  var answer = "";
  if (s.length % 2 !== 0) {
    const idx = Math.floor(s.length / 2);
    answer = s[idx];
  } else {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }
  return answer;
}
