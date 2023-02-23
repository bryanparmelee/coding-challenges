function solution(s1, s2) {
  let count = 0;
  let str1 = s1.split("");
  let str2 = s2.split("");
  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);
    if (index !== -1) {
      str2.splice(index, 1);
      count++;
    }
  }
  return count;
}
