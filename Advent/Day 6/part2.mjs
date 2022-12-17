//https://adventofcode.com/2022/day/6

import fullData from "./data.mjs";

const sampleData1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const sampleData2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const sampleData3 = "nppdvjthqldpwncqszvftbrmjlhg";
const sampleData4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const sampleData5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

const checkRepeats = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return true;
        }
    }
}


const findStart = (str) => {
    for (let i = 14; i < str.length; i++) {
        const fourteen = str.substring(i, i - 14);
      
        if (checkRepeats(fourteen) !== true) {
            return i;
        }    
   
    }
}

console.log(findStart(fullData));

