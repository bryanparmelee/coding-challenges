//https://app.codesignal.com/arcade/code-arcade/time-river/Xg8AXfc4hHeebq4se

function solution(birthdayDate) {
  const birthday = new Date(birthdayDate);
  const day = birthday.getDay();
  const date = birthday.getDate();
  const month = birthday.getMonth();
  const year = birthday.getFullYear();
  let nextYear = year + 1;
  while (
    new Date(nextYear, month, date).getDay() !== day ||
    new Date(nextYear, month, date).getDate() !== date
  ) {
    nextYear++;
  }
  return nextYear - year;
}
