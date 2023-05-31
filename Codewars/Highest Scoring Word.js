//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let scores = [];
  x = x.split(" ");
  x.map((word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += alpha.indexOf(word[i]) + 1;
    }
    scores.push(sum);
  });
  let winnerIndex = scores.indexOf(Math.max(...scores));

  return x[winnerIndex];
}

function high2(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
