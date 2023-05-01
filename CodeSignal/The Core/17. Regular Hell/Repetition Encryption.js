//https://app.codesignal.com/arcade/code-arcade/regular-hell/jyaMHzCG4SGoEjASE

function solution(letter) {
  var pattern = /([A-Z]+)[^A-Z]+\1\b/gi;
  var matches = letter.match(pattern);
  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
