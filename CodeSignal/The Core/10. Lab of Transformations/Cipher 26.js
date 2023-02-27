//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/JeDDnToFtitiiWDZn

// Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
// The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.

// letter 0: t -> 19 -> t;
// letter 1: th -> (19 + 7) % 26 -> 0 -> a;
// letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i

function solution(message) {
  let output = "";
  let sum = 0;
  for (let i = 0; i < message.length; i++) {
    let next = (message[i].charCodeAt() - 97 + 26 - sum) % 26;
    sum = (sum + next) % 26;
    output += String.fromCharCode(next + 97);
  }
  return output;
}
