export function generateRandomNumberArray(length, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    uniqueNumbers.add(Math.floor(Math.random() * max))
  }

  return Array.from(uniqueNumbers)
}

