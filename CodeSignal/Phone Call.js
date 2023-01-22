//https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function solution(min1, min2_10, min11, s) {
    let time = 0;
    if (s >= min1) {
        time++;  
        s = s - min1;             
    } 
    while (s >= min2_10 && time < 10) {
        time++;
        s = s - min2_10;         
    }
    if (time < 10) {
        return time;
    } else {
        while (s >= min11) {
            time++;
            s = s - min11; 
        }  
        return time;  
    }   
}