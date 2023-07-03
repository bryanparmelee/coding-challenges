//https://www.codewars.com/kata/5bb904724c47249b10000131/train/typescript

export function points(games: string[]): number {
  let points: number = 0;
  games.map((game) => {
    const x = game[0],
      y = game[2];
    if (x > y) {
      points += 3;
    } else if (x === y) {
      points++;
    }
  });
  return points;
}

export function points2(games: string[]): number {
  return games.reduce((prev, curr) => {
    const [ourTeamScore, opponentScore] = curr.split(":");

    if (ourTeamScore === opponentScore) return prev + 1;

    if (ourTeamScore > opponentScore) {
      return prev + 3;
    } else {
      return prev;
    }
  }, 0);
}
