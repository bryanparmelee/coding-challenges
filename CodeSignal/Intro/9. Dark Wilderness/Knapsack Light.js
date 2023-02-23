//https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2

function solution(value1, weight1, value2, weight2, maxW) {
     if (weight1 > maxW && weight2 <= maxW) {
        return value2;
    }   else if (weight1 <= maxW && weight2 > maxW) {
        return value1;
    } else if (weight1 <= maxW && weight2 <= maxW) {
        return weight1 + weight2 <= maxW ? value1 + value2 : Math.max(value1, value2);
    }
    else {
        return 0;
    }
}
