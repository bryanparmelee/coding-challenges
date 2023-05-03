//https://app.codesignal.com/arcade/code-arcade/secret-archives/oAwCH6ecrzA4ARb6d

function solution(lrcLyrics, songLength) {
  let times = lrcLyrics.slice(0);
  times = times.map(function (val) {
    let output = val.substring(1, 9);
    if (parseInt(output.substring(0, 1)) >= 6) {
      output =
        "01:" +
        (output.substring(0, 1) - 6) +
        output.substring(1, 5) +
        "," +
        output.substring(6) +
        "0";
    } else {
      output = "00:" + output.substring(0, 5) + "," + output.substring(6) + "0";
    }
    return output;
  });
  times.push(songLength + ",000");
  let output = [];
  let startTime = "00:00:00,000";
  let endTime = "00:00:00,000";
  for (let i = 0; i < times.length - 1; i++) {
    output.push("" + (i + 1));
    output.push(times[i] + " --> " + times[i + 1]);
    output.push(lrcLyrics[i].substring(11));
    output.push("");
  }
  output.pop();
  return output;
}
