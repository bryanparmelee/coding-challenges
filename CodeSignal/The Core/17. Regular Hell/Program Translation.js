//https://app.codesignal.com/arcade/code-arcade/regular-hell/WwsFwv42dzLJJFmAE

function solution(code, args) {
  var argumentVariants = args.join("|");
  var re = new RegExp(
    "(?<=[^0-9a-zA-Z$_])(" + argumentVariants + ")(?=[^0-9a-zA-Z$_])",
    "g"
  );
  var sub = (x) => "$" + x;
  return code.replace(re, sub);
}
