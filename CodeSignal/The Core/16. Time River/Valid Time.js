//https://app.codesignal.com/arcade/code-arcade/time-river/ywMyCTspqGXPWRZx5

function solution(time) {
  return time.split(":")[0] < 24 && time.split(":")[1] < 60;
}
