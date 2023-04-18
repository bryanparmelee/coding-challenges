//https://app.codesignal.com/arcade/code-arcade/regular-hell/mj4qdJqZknbkHNzhK

function solution(sentence) {
  var re = /^[A-Z][^?.!]*[?.!]$/;
  return re.test(sentence);
}
