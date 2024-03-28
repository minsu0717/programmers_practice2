function solution(answers) {
  let su1 = [1, 2, 3, 4, 5];
  let su2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let su3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const obj = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === su1[i % su1.length]) obj[1]++;
    if (answers[i] === su2[i % su2.length]) obj[2]++;
    if (answers[i] === su3[i % su3.length]) obj[3]++;
  }
  const maxScore = Math.max(...Object.values(obj));
  let winners = [];
  for (let [idx, num] of Object.entries(obj)) {
    if (num === maxScore) {
      winners.push(idx);
    }
  }
  return winners.map(Number);
}
