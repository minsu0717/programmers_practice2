function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i]);
    } else {
      if (answer[answer.length - 1] !== arr[i]) {
        answer.push(arr[i]);
      }
      // console.log(answer[answer.length-1])
    }
  }

  return answer;
}
