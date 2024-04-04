function solution(N, stages) {
  var answer = [];
  let obj = {};
  for (let i = 0; i < stages.length; i++) {
    if (stages[i] <= N) {
      if (!obj[stages[i]]) {
        obj[stages[i]] = 1;
      } else {
        obj[stages[i]] += 1;
      }
    }
  }

  let obj2 = {};
  let totalPlayers = stages.length;
  for (let j = 1; j <= N; j++) {
    const failurePlayers = obj[j] || 0;
    const failureRate = totalPlayers === 0 ? 0 : failurePlayers / totalPlayers;
    obj2[j] = failureRate;
    totalPlayers -= failurePlayers;
  }

  const entries = Object.entries(obj2);
  entries.sort((a, b) => b[1] - a[1]);
  answer = entries.map((entry) => Number(entry[0]));
  return answer;
}
