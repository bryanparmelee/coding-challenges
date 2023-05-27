//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  let odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
  array.map((x, i) => {
    if (x % 2 === 0) {
      odds.splice(i, 0, x);
    }
  });
  return odds;
}
