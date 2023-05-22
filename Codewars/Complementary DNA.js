//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  const symbols = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let output = "";
  for (let ch of dna) {
    output += symbols[ch];
  }
  return output;
}
