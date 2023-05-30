//https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

function expandedForm(num) {
  let nArr = num.toString().split("");
  nArr = nArr.map((n, i, a) => {
    if (n !== "0") {
      return n.padEnd(a.length - i, "0");
    }
    return n;
  });
  return nArr.filter((n) => n !== "0").join(" + ");
}
