//https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ

function solution(s) {
    let diff = 0;
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let regex = new RegExp(letter, 'g');
        if (s.indexOf(letter) !== s.lastIndexOf(letter)) {
            diff++;
            s = s.replace(regex, '');
        }
    }
    return diff + s.length;
}