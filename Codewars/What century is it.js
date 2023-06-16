//https://www.codewars.com/kata/52fb87703c1351ebd200081f/javascript

function whatCentury(year) {
  if (Number(year) % 100 === 0) return year.slice(0, 2) + "th";
  let century = (Number(year.slice(0, 2)) + 1).toString();
  let suffix;
  if (century[0] === "1") {
    suffix = "th";
  } else if (century[1] === "1") {
    suffix = "st";
  } else if (century[1] === "2") {
    suffix = "nd";
  } else if (century[1] === "3") {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  return century + suffix;
}

function whatCentury2(year) {
  var century = Math.ceil(year / 100);
  return (
    century +
    (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
  );
}
