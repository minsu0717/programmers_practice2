function solution(n, lost, reserve) {
  var answer = 0;
  let arr = [];
  let student = [];
  // for(let i = 1; i <= n; i++){
  //     arr.push(i)
  // }
  // // 가져온 사람 배열 만들기
  // arr.forEach(e => {
  //     if(!lost.includes(e)){
  //         student.push(e)
  //     }
  // })

  for (let i = 0; i < reserve.length; i++) {
    if (reserve[i] <= n) {
      if (reserve[i] === 1) {
        student.push(2);
      } else {
        if (student.includes(reserve[i] - 1)) {
          if (reserve[i] + 1 <= n) {
            student.push(reserve[i] + 1);
          }
        }
      }
    }
  }
  console.log(student);

  return answer;
}
