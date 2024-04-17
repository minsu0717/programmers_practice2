function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      score = dartResult[i];
      if (dartResult[i] === 1 && dartResult[i + 1] === 0) {
        score = 10;
      }
    } else if (dartResult[i] === "S") {
      arr.push(score * 1);
    } else if (dartResult[i] === "D") {
      arr.push(score ** 2);
    } else if (dartResult[i] === "T") {
      arr.push(score ** 3);
    } else if (dartResult[i] === "*") {
      if (arr.length === 1) {
        arr[arr.length - 1] = arr[arr.length - 1] * 2;
      } else {
        arr[arr.length - 1] = arr[arr.length - 1] * 2;
        arr[arr.length - 2] = arr[arr.length - 2] * 2;
      }
    } else if (dartResult[i] === "#") {
      arr[arr.length - 1] = arr[arr.length - 1] * -1;
    }
  }
  console.log(arr);

  arr.forEach((e) => (answer += e));

  return answer;
}
