function solution(arr) {
  var answer = [];
  const minNum = Math.min(...arr);
  const idx = arr.indexOf(minNum);
  arr.splice(idx, 1);
  answer = arr.length !== 0 ? arr : [-1];
  return answer;
}
