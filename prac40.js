function solution(s) {
  const numList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numList.forEach((n, i) => {
    while (s.includes(n)) {
      s = s.replace(n, i);
    }
  });
  return Number(s);
}
