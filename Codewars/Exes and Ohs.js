//https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

function XO(str) {
  let exes = str.match(/x/gi);
  let ohs = str.match(/o/gi);
  if (exes && ohs) {
    return exes.length === ohs.length;
  } else if (!exes && !ohs) {
    return true;
  }
  return false;
}

function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
