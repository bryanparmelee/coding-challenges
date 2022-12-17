//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

const formatDuration = (secs) => {
    const year = 31536000;
    const day = 86400;
    const hour = 3600;
    const minute = 60;

    let res = '';
    if (secs === 0) { res += 'now';}
    
    const years = Math.floor(secs / year); 
    secs %= year;
    const days = Math.floor(secs / day);
    secs %= day;
    const hours = Math.floor(secs / hour);
    secs %= hour;
    const minutes = Math.floor(secs / minute);
    secs %= minute;
    const seconds = secs; 

    const totals = [
        years,
        days,
        hours,
        minutes,
        seconds
    ];

    const human = [
        "year",
        "day",
        "hour",
        "minute",
        "second"
    ];

    let plurals = [];

    for (let i = 0; i < totals.length; i++) {
        if (totals[i] ===1) {
            plurals.push(totals[i] + ' ' + human[i]);
        } else if (totals[i] >= 2) {
            plurals.push(totals[i] + ' ' + human[i] + 's');
        }
    }

    for (let i = 0; i < plurals.length; i++) {
        if (i === plurals.length - 2) {
            res += plurals[i] + ' and ' + plurals[i + 1];
            break;
        } 
        if (i !== plurals.length - 1) {
            res += plurals[i] + ', ';
        } else {
            res += plurals[i];
        }
    }
    
    return res;
}


console.log(formatDuration(3662));


//minute = 60
//hour = 3600
//day = 86400
//year = 31536000