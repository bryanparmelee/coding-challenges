//https://app.codesignal.com/arcade/code-arcade/regular-hell/E6eYu8dsfwch2My27

function solution(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += "[" + s[i] + "]" + "+.*";
  }
  var re = new RegExp(pattern);
  return re.test(t);
}
