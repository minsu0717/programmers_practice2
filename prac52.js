function solution(dartResult) {
  var answer = 0;
  const idx1 = dartResult.indexOf(2);
  const idx2 = dartResult.indexOf(3);
  let arr = [];
  let newArr = [];
  let cntArr = [];
  if (idx1 !== -1) {
    arr.push(dartResult.slice(0, idx1));
    if (idx2 !== -1) {
      arr.push(dartResult.slice(idx1, idx2));
      arr.push(dartResult.slice(idx2, dartResult.length));
    } else {
      arr.push(dartResult.slice(idx1, dartResult.length));
    }
  }
  newArr = arr.map((e, i) => {
    e = [...e];
    if (e[1] === "S") {
      answer += e[0] * 1;
    } else if (e[1] === "D") {
      answer += e[0] ** 2;
    } else if (e[1] === "T") {
      answer += e[0] ** 3;
    }
  });

  return answer;
}
