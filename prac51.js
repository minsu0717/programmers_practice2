function solution(participant, completion) {
  let arr = [];
  participant.sort();
  completion.sort();
  participant.filter((e, i) => {
    if (participant[i] !== completion[i]) {
      arr.push(e);
    }
  });
  return arr[0];
}
