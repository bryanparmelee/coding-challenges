//https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg

function solution(votes, k) {
    let winners = 0;
    let max = Math.max(...votes);
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] + k > max) {
            winners++;
        }
    }
    if (winners === 0 && votes.indexOf(max) === votes.lastIndexOf(max)) {
        return 1;
    } return winners;
}


