function solution(nums) {
  const uniquePokemons = new Set(nums);
  const maxCount = nums.length / 2;

  return Math.min(uniquePokemons.size, maxCount);
}
