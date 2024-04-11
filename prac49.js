function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < score.length; i += m) {
    let scoreSlice = score.slice(i, i + m);
    if (scoreSlice.length === m) {
      answer += scoreSlice[m - 1] * m;
    }
  }
  return answer;
}
