//https://app.codesignal.com/arcade/code-arcade/time-river/WBjidxs6TBgJqp2RG

function solution(year, daysOfTheWeek, holidays) {
  let output = 0;
  daysOfTheWeek = daysOfTheWeek.map((day) => (day === 7 ? 0 : day));
  const hDays = holidays.map((el) => {
    let adjustedYear = el < "05-31" ? year + 1 : year;
    return new Date(el + "-" + adjustedYear).getDay();
  });
  hDays.map((day, i) => {
    if (daysOfTheWeek.includes(day)) {
      output++;
    }
  });
  return output;
}
