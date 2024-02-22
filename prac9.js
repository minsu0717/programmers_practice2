function solution(n) {
  var answer = 0;
  answer = Number(
    [...String(n)]
      .map(Number)
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
  return answer;
}
