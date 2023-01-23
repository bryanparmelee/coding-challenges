//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/7jaup9HprdJno2diw

function solution(score1, score2) {
    if ((score1 === 6 && score2 < 5) || (score2 === 6 && score1 < 5)) {
        return true;
    } else if ((score1 === 7 && score2 >= 5 && score2 < 7) || (score2 === 7 && score1 >= 5 && score1 < 7)) {
        return true
    } else {
        return false;
    }
}

