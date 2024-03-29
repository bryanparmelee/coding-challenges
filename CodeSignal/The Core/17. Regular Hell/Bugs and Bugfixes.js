//https://app.codesignal.com/arcade/code-arcade/regular-hell/4GC4dP3gHRMcJDaRy

function solution(rules) {
  var pattern = /(\d*)d(\d+)([+-]\d+)*/g;
  var formula = pattern.exec(rules);

  var res = 0;
  while (formula) {
    var rolls = formula[1] ? parseInt(formula[1]) : 1;
    var dieType = parseInt(formula[2]);
    var formulaMax = rolls * dieType;

    if (formula[3]) {
      if (formula[3][0] === "-") {
        formulaMax -= parseInt(formula[3].slice(1));
      } else {
        formulaMax += parseInt(formula[3].slice(1));
      }
    }

    res += formulaMax;
    formula = pattern.exec(rules);
  }

  return res;
}
