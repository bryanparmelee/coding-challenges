//https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi

function solution(cell1, cell2) {
    const letters = {
        'A': 'odd',
        'B': 'even',
        'C': 'odd',
        'D': 'even',
        'E': 'odd',
        'F': 'even',
        'G': 'odd',
        'H': 'even',
    }
    const oddCheck = (n) => n % 2 === 0 ? 'even' : 'odd';
    const squareColor = (str) => {
        return letters[str[0]] === oddCheck(str[1]) ? 'black' : 'white';
    }
    return squareColor(cell1) === squareColor(cell2);   
}