//https://www.codewars.com/kata/550f22f4d758534c1100025a/typescript

export function dirReduc(arr: string[]): string[] {
  const opposites: { [key: string]: string } = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  return arr.reduce((steps: string[], step: string) => {
    if (steps[steps.length - 1] === opposites[step]) steps.pop();
    else steps.push(step);
    return steps;
  }, []);
}
