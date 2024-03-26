function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j && j > i) {
        if (!answer.includes(numbers[i] + numbers[j])) {
          answer.push(numbers[i] + numbers[j]);
        }
      }
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}
