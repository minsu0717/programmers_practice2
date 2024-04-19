function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let i = 0; i < realReserve.length; i++) {
    if (realReserve[i] === 1) {
      realLost.filter((e) => {
        if (e === 2) realLost.shift();
      });
    } else {
      realLost.filter((e, idx) => {
        if (realReserve[i] + 1 === e || realReserve[i] - 1 === e) {
          realLost.splice(idx, 1);
        }
      });
    }
  }

  console.log(realLost);

  return n - realLost.length;
}
