//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return s
    .split("")
    .map((ch, i) => {
      return ch.toUpperCase() + ch.toLowerCase().repeat(i);
    })
    .join("-");
}
