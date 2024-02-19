function solution(name, yearning, photo) {
  let arr = [];
  let obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  for (let j = 0; j < photo.length; j++) {
    let answer = 0;
    for (let k = 0; k < photo[j].length; k++) {
      if (!obj[photo[j][k]]) {
        answer += 0;
      } else {
        answer += obj[photo[j][k]];
      }
    }
    arr.push(answer);
  }
  console.log(arr);

  return arr;
}
