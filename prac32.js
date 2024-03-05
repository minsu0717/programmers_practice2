function solution(a, b) {
  var answer = "";
  const dateArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let d = `2016-${a}-${b}`;
  const date = new Date(d);
  answer = dateArr[date.getDay()];
  return answer;
}
