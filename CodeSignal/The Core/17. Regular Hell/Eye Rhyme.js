//https://app.codesignal.com/arcade/code-arcade/regular-hell/tsMpGZTEgq6D6uvaA

function solution(pairOfLines) {
  var re = /^.*(.{3})\t.*(.{3})$/;
  var match = re.exec(pairOfLines);
  return match[1] == match[2];
}
