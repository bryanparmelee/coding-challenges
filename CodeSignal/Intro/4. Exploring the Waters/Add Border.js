function solution(picture) {
  let str = "*";
  let length = picture[0].length + 2;
  const sides = picture.map((item) => "*" + item + "*");
  sides.push(str.repeat(length));
  sides.unshift(str.repeat(length));
  return sides;
}
