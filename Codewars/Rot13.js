//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  let alpha =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message
    .split("")
    .map((ch) => {
      if (alpha.indexOf(ch) === -1) {
        return ch;
      }
      return alpha[alpha.indexOf(ch) + 13];
    })
    .join("");
}
