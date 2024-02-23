function solution(phone_number) {
  var answer = "";
  const num = phone_number.slice(0, phone_number.length - 4);
  for (let i = 0; i < num.length; i++) {
    answer += "*";
  }
  answer += phone_number.slice(phone_number.length - 4, phone_number.length);
  return answer;
}
