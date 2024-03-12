function solution(s) {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    const numArr = [...s].map(Number);
    for (num of numArr) {
      if (isNaN(num)) {
        answer = false;
      }
    }
  } else {
    answer = false;
  }
  return answer;
}
