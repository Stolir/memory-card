export function generateRandomNumberArray(length, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    uniqueNumbers.add(Math.floor(Math.random() * (max + 1)))
  }

  return Array.from(uniqueNumbers)
}

export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}