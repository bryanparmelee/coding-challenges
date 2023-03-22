//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/TTsQFn3ppXCk9uTXs

const solution = (size, nonogramField) => {
  const offset = Math.ceil(size / 2);

  const match = (numsChunk, canvChunk) => {
    const numbersSeq = numsChunk.filter((cell) => cell !== "-");
    const canvasSeq = canvChunk
      .join("")
      .split(".")
      .filter((hashes) => hashes)
      .map((hashes) => hashes.length);
    return numbersSeq.join("") === canvasSeq.join("");
  };

  const areRowsCorrect = () => {
    for (let i = offset; i < nonogramField.length; i++) {
      const numbers = nonogramField[i].slice(0, offset);
      const canvas = nonogramField[i].slice(offset);
      if (!match(numbers, canvas)) return false;
    }
    return true;
  };

  const areColumnsCorrect = () => {
    for (let i = offset; i < size + offset; i++) {
      const column = [];
      for (let j = 0; j < nonogramField.length; j++) {
        column.push(nonogramField[j][i]);
      }
      const numbers = column.slice(0, offset);
      const canvas = column.slice(offset);
      if (!match(numbers, canvas)) return false;
    }
    return true;
  };

  return areRowsCorrect() && areColumnsCorrect();
};
