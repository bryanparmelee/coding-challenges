//https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && !this[i].sameStructureAs(other[i]))
      return false;
    if (!Array.isArray(this[i]) && Array.isArray(other[i])) return false;
  }
  return true;
};

Array.prototype.sameStructureAs2 = function (other) {
  return (
    isArray(other) &&
    this.length == other.length &&
    this.every(function (a, i) {
      var b = other[i];
      return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
    })
  );
};
