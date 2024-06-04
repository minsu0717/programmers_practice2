function solution(babbling) {
  var answer = 0;
  const a = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let bab = babbling[i];
    for (let j = 0; j < a.length; j++) {
      if (bab.includes(a[j].repeat(2))) {
        break;
      }
      bab = bab.split(a[j]).join(" ");
    }
    if (bab.split(" ").join("").length === 0) {
      answer++;
    }
  }
  return answer;
}
