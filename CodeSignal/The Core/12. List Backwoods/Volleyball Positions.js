//https://app.codesignal.com/arcade/code-arcade/list-backwoods/fmYdsYcGfaTu4yTQt

function solution(formation, k) {
  if (!k % 6) return formation;
  let players = [
    formation[3][2],
    formation[1][2],
    formation[0][1],
    formation[1][0],
    formation[3][0],
    formation[2][1],
  ];
  const rotations = k % 6;
  let newIndex = [];
  for (let i = 0; i < 6; i++) {
    newIndex.push(i - rotations < 0 ? i + 6 - rotations : i - rotations);
  }

  formation[3][2] = players[newIndex[0]];
  formation[1][2] = players[newIndex[1]];
  formation[0][1] = players[newIndex[2]];
  formation[1][0] = players[newIndex[3]];
  formation[3][0] = players[newIndex[4]];
  formation[2][1] = players[newIndex[5]];
  return formation;
}
