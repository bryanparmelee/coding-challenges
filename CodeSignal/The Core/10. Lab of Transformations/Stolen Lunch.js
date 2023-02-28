//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/M97sbwRp3tGy8uAb8

function solution(note) {
  return note.replace(/[0-9a-j]/g, (str) => {
    return isNaN(str)
      ? str.charCodeAt() - 97
      : String.fromCharCode(Number(str) + 97);
  });
}
