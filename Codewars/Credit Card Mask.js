//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  return cc.length <= 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
}

function maskify2(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
