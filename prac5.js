function solution(n) {
  var answer = 0;
  const strArr = [...String(n)];
  const numArr = strArr.map(Number);
  for (num of numArr) {
    answer += num;
  }

  return answer;
}
