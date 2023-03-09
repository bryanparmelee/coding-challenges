//https://app.codesignal.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC

function solution(names) {
  let output = [];
  names.map((name) => {
    if (!output.includes(name)) {
      output.push(name);
    } else {
      for (let j = 1; ; j++) {
        const str = `${name}(${j})`;
        if (!output.includes(str)) {
          output.push(str);
          break;
        }
      }
    }
  });
  return output;
}
