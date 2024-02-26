function solution(t, p) {
  const idx = p.length;
  const arr = [...t];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i, i + idx).join("").length === idx) {
      newArr.push(arr.slice(i, i + idx).join(""));
    }
  }
  const numArr = newArr.map(Number);
  const filterArr = numArr.filter((num) => num <= Number(p));
  return filterArr.length;
}
