//https://app.codesignal.com/arcade/code-arcade/time-river/DKjM5qLz5ccK2ukhH

function solution(part, total) {
  total = toSeconds(total);
  part = toSeconds(part);
  let remaining = total - part;
  let denom = gcd(remaining, total);
  return [part / denom, total / denom];
}

function toSeconds(time) {
  time = time.split(":").map(Number);
  return time[0] * 3600 + time[1] * 60 + time[2];
}

function gcd(a, b) {
  if (!b) return a;

  return gcd(b, a % b);
}
