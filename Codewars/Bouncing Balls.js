//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, win) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || win >= h) return -1;
  let count = 1;
  h *= bounce;
  while (h > win) {
    count += 2;
    h *= bounce;
  }
  return count;
}

function bouncingBall2(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}
