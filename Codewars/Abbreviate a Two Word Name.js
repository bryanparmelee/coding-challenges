//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
}
