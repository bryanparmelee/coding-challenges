//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    principal += principal * interest - principal * interest * tax;
    year++;
  }
  return year;
}

function calculateYears2(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}
