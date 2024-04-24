function solution(numbers, hand) {
  var answer = "";
  let leftPosition = "*";
  let rightPosition = "#";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      leftPosition = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      rightPosition = numbers[i];
    } else {
      const leftDistance = getDistance(leftPosition, numbers[i]);
      const rightDistance = getDistance(rightPosition, numbers[i]);

      if (leftDistance < rightDistance) {
        answer += "L";
        leftPosition = numbers[i];
      } else if (leftDistance > rightDistance) {
        answer += "R";
        rightPosition = numbers[i];
      } else {
        if (hand === "left") {
          answer += "L";
          leftPosition = numbers[i];
        } else {
          answer += "R";
          rightPosition = numbers[i];
        }
      }
    }
  }

  return answer;
}

function getDistance(position, target) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const pos = keypad[position];
  const tar = keypad[target];

  return Math.abs(pos[0] - tar[0]) + Math.abs(pos[1] - tar[1]);
}
