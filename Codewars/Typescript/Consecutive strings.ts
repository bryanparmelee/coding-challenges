//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/typescript

export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let consec: string[] = [];
  for (let i = 0; i <= strarr.length - k; i++) {
    let str: string = strarr[i];
    for (let j = 1; j < k; j++) {
      str += strarr[i + j];
    }
    consec.push(str);
  }
  consec.sort((a, b) => b.length - a.length);
  return consec[0];
}

export function longestConsec2(strarr: string[], k: number): string {
  let max = "";
  const n = strarr.length;

  for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
    const newStr = strarr.slice(i, i + k).join("");
    max = max.length >= newStr.length ? max : newStr;
  }
  return max;
}
