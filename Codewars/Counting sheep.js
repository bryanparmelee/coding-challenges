//https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((e) => e === true).length;
}

function countSheeps2(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
