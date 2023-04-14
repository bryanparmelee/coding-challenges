//https://app.codesignal.com/arcade/code-arcade/time-river/ekhR5y6QuHjxWk36W

function solution(someTime, leavingTime) {
  const sTime = new Date(someTime);
  const lTime = new Date(leavingTime);
  let difference = lTime.getTime() - sTime.getTime();
  let output = new Date(sTime.getTime() - difference).toISOString();
  return output.replace("T", " ").substring(0, 16);
}
