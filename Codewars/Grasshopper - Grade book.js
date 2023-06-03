//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/javascript

function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else if (avg < 60) return "F";
}
