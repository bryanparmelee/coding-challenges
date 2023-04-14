//https://app.codesignal.com/arcade/code-arcade/time-river/EaPEmzu6CYRuc4X2C

function solution(takeOffTime, minutes) {
  let [hour, min] = takeOffTime.split(":").map(Number);
  let time = (hour * 60 + min || 24 * 60) - 1440;
  let output = 0;
  let elapsed = 0;
  for (let i = 0; i < minutes.length; i++) {
    let mins = minutes[i];
    mins -= elapsed;
    elapsed = minutes[i];
    if (time <= 0 && time + mins >= 0) {
      output++;
    }
    time += mins - 60;
  }
  return output + (time <= 0);
}
