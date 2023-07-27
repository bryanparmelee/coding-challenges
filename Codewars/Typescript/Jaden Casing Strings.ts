//https://www.codewars.com/kata/5390bac347d09b7da40006f6/typescript

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
