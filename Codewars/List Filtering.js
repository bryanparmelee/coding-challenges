//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript

function filter_list(l) {
  return l.filter((e) => typeof e === "number");
}

//alt solution

function filter_list2(l) {
  return l.filter(Number.isInteger);
}
