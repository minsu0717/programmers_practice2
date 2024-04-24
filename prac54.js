function solution(numbers, hand) {
  var answer = "";
  const l = [1, 4, 7];
  const r = [3, 6, 9];
  let leftPosition = 0;
  let rightPosition = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log("왼쪽 : ", leftPosition);
    console.log("오른쪽 : ", rightPosition);
    console.log("--------");
    let leftMove = 0;
    let rightMove = 0;

    if (l.includes(numbers[i])) {
      answer += "L";
      leftPosition = numbers[i];
    } else if (r.includes(numbers[i])) {
      answer += "R";
      rightPosition = numbers[i];
    } else {
      console.log(numbers[i]);
      if (Math.abs(numbers[i] - leftPosition) === 3) {
        leftMove = 1;
      } else {
        leftMove = Math.abs(numbers[i] - leftPosition);
      }
      if (Math.abs(numbers[i] - rightPosition) === 3) {
        rightMove = 1;
      } else {
        rightMove = Math.abs(numbers[i] - rightPosition);
      }

      console.log(leftMove);
      console.log(rightMove);
      if (leftMove < rightMove) {
        answer += "L";
        leftPosition = numbers[i];
      } else if (leftMove > rightMove) {
        answer += "R";
        rightPosition = numbers[i];
      } else if (leftMove === rightMove) {
        console.log(numbers[i]);
        if (hand === "right") {
          answer += "R";
          rightPosition = numbers[i];
        } else {
          answer += "L";
          leftPosition = numbers[i];
        }
      }
    }
  }

  return answer;
}
