//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/MQg7s3dKrP4caN42A

function solution(items) {
  let output = [-1];
  for (let i = 1; i < items.length; i++) {
    let prev = i - 1;
    while (prev >= 0) {
      if (items[i] > items[prev]) {
        output.push(items[prev]);
        break;
      }
      prev--;
    }
    if (output.length === i) {
      output.push(-1);
    }
  }
  return output;
}

function solution2(items) {
  return items.map((item, i, arr) => {
    return (
      arr
        .slice(0, i)
        .reverse()
        .find((el) => el < item) || -1
    );
  });
}
