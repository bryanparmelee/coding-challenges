//https://www.codewars.com/kata/635e70f47dadea004acb5663/train/typescript

export function triangle(row: string): string {
  if (row.length === 1) return row;
  let alpha = " abcdefghijklmnopqrstuvwxyz";
  let str: string = "";
  for (let i = 0; i < row.length - 1; i++) {
    let chIndex =
      alpha.indexOf(row[i]) + alpha.indexOf(row[i + 1]) > 26
        ? alpha.indexOf(row[i]) + alpha.indexOf(row[i + 1]) - 26
        : alpha.indexOf(row[i]) + alpha.indexOf(row[i + 1]);
    str += alpha[chIndex];
  }
  return triangle(str);
}

export function triangle2(row: string): string {
  let r: string[] = row.split("");
  while (r.length > 1) {
    r = r
      .slice(1)
      .map((x, i) =>
        String.fromCharCode(
          ((x.charCodeAt(0) + r[i].charCodeAt(0) - 193) % 26) + 97
        )
      );
  }
  return r[0];
}
