function solution(s) {
  var answer = "";
  const strArr = s.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (i >= 1) {
      answer += " ";
    }
    for (let j = 0; j < strArr[i].length; j++) {
      if (j % 2 === 0) {
        answer += strArr[i][j].toUpperCase();
      } else {
        answer += strArr[i][j].toLowerCase();
      }
    }
  }
  return answer;
}
