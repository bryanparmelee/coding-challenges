//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  if (s.length % 2) {
    let half = Math.floor(s.length / 2);
    return s.slice(half, half + 1);
  } else {
    let half = s.length / 2;
    return s.slice(half - 1, half + 1);
  }
}
