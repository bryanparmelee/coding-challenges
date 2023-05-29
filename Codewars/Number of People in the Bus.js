//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function (busStops) {
  let people = 0;
  busStops.map((el) => {
    people += el[0] - el[1];
  });
  return people;
};

const number2 = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
