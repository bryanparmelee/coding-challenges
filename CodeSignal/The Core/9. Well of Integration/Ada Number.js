//https://app.codesignal.com/arcade/code-arcade/well-of-integration/Ghe6HWhFft8h6fR49

//Fails one hidden test

function solution(line) {
  let parsed = line.replace(/_/g, "").split("#");
  if (parsed.length === 1) {
    return parseDecimal(parsed[0]);
  } else if (parsed.length === 3) {
    return parseBase(parsed[0], parsed[1].toLowerCase(), parsed[2]);
  } else {
    return false;
  }
}

function parseDecimal(num) {
  return !/[a-zA-Z]/g.test(num);
}

function parseBase(base, num, end) {
  if (!parseDecimal(base) || end.length > 0) {
    return false;
  }
  if (Number(base) < 2 || Number(base) > 16) {
    return false;
  }
  if (num.length === 0) {
    return false;
  }
  return parseBasedNum(base, num);
}

function parseBasedNum(base, num) {
  const digits = "0123456789abcdefg";
  const allowed = digits.substring(0, Number(base));
  for (char of num) {
    if (!allowed.includes(char)) {
      return false;
    }
  }
  return true;
}

//_____________________________________//

function solution2(line) {
  line = line.replace(/_/g, ``);
  if (line.match(/^\d+$/)) return true;
  const num = line.match(/^(\d{1,2})#([0-9a-f]+)#$/i);
  return num
    ? [...num[2]].every((v) => !isNaN(parseInt(v, num[1]))) &&
        num[1] >= 2 &&
        num[1] <= 16
    : false;
}
