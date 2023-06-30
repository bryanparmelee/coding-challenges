//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/typescript

export function printerError(s: string): string {
  let errors = s.replace(/[a-m]/g, "");
  return errors.length.toString() + "/" + s.length.toString();
}

export function printerError2(s: string): string {
  return `${s.match(/[^a-m]{1}/g)?.length || 0}/${s.length}`;
}
