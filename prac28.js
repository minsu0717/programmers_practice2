function solution(x) {
  var answer = true;
  let a = 0;
  const strArr = [...String(x)];
  const numArr = strArr.map(Number);
  numArr.forEach((num) => (a += num));
  answer = x % a === 0 ? true : false;
  return answer;
}
