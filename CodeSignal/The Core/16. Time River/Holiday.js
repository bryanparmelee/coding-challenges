//https://app.codesignal.com/arcade/code-arcade/time-river/4JypHBf7kQc3GjhRF

function solution(x, weekDay, month, yearNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let mon = months.indexOf(month);
  let day = days.indexOf(weekDay);
  let date = 1;
  let start = new Date(yearNumber, mon, date);
  while (start.getDay() !== day) {
    date++;
    start = new Date(yearNumber, mon, date);
  }
  let output = start.getDate() + 7 * (x - 1);
  if (new Date(yearNumber, mon, output).getMonth() !== mon) {
    return -1;
  }
  return output;
}
