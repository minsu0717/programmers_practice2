function solution(players, callings) {
  let obj = {};
  players.forEach((e, i) => {
    obj[e] = i;
  });
  for (let i = 0; i < callings.length; i++) {
    const currentIdx = obj[callings[i]];
    // players.splice(currentIdx-1,2,callings[i],players[currentIdx-1])
    players[currentIdx] = players[currentIdx - 1];
    players[currentIdx - 1] = callings[i];
    obj[callings[i]] = currentIdx - 1;
    obj[players[currentIdx]] = currentIdx;
  }

  return players;
}
