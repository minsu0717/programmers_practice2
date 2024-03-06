function solution(d, budget) {
  var answer = 0;
  let price = 0;
  d.sort((a, b) => {
    return a - b;
  });
  d.forEach((num) => {
    price += num;
    if (price <= budget) {
      answer++;
    }
  });
  return answer;
}
