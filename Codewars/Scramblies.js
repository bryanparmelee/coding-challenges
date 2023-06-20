//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript

function scramble(strToBeChecked, strToCheckFor) {
  let numLetters = {};

  for (const letter of strToCheckFor) {
    if (numLetters[letter]) numLetters[letter]++;
    else numLetters[letter] = 1;
  }

  for (const letter of strToBeChecked) {
    if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--;
  }

  for (const key in numLetters) {
    if (numLetters[key] !== 0) return false;
  }

  return true;
}
