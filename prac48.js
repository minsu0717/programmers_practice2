function solution(k, score) {
  var answerScore = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      answer.push(score[i]);
      answerScore.push(Math.min(...answer));
    } else {
      answer.sort((a, b) => {
        return a - b;
      });
      if (Math.min(...answer) <= score[i]) {
        answer.shift();
        answer.push(score[i]);
        answerScore.push(Math.min(...answer));
      } else {
        answerScore.push(Math.min(...answer));
      }
    }
  }
  return answerScore;
}
