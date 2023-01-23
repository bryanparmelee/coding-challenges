//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/J7PQDxpWqhx7HrvBZ

function solution(lastNumberOfDays) {
    switch (lastNumberOfDays) {
        case 28:
            return [31];
            break;
        case 30:
            return [31];
            break;
        case 31:
            return [28, 30, 31];
            break;
    }
}