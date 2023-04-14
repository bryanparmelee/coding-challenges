//https://app.codesignal.com/arcade/code-arcade/time-river/36z952jJdatJnFXGC

function solution(currMonth) {
  let [m, y] = currMonth.split("-").map(Number);
  if (m === 12) {
    m = 0;
    y++;
  }
  let nextMonth = new Date(y, m, 1);
  while (nextMonth.getDay() !== 1) {
    if (m === 11) {
      m = 0;
      y++;
    }
    m++;
    nextMonth = new Date(y, m, 1);
  }
  return (
    nextMonth.toISOString().substring(5, 7) +
    "-" +
    nextMonth.toISOString().substring(0, 4)
  );
}
