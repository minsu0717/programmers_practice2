function solution(absolutes, signs) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      arr.push(absolutes[i]);
    } else {
      arr.push(-absolutes[i]);
    }
  }
  arr.forEach((num) => {
    answer += num;
  });
  return answer;
}
