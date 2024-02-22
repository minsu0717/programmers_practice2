function solution(s) {
  var answer = true;
  let p = [];
  let y = [];
  const str = s.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p.push(str[i]);
    } else if (str[i] === "y") {
      y.push(str[i]);
    }
  }
  answer = p.length === y.length ? true : false;

  return answer;
}
