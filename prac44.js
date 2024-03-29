function isPrime(num) {
  if (num === 1) return false;
  for (let n = 2; n < num; n++) {
    if (num % n === 0) return false;
  }
  return true;
}

function solution(nums) {
  var answer = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (j > i && k > j) {
          sum = nums[i] + nums[j] + nums[k];
          if (isPrime(sum) === true) answer++;
        }
      }
    }
  }
  return answer;
}
