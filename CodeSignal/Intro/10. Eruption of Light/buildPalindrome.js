//https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx

const palidromeCheck = (str) => {
    return str.split('').reverse().join('') === str ?
        true :
        false;
}

function solution(st) {
   let output = st;
   let start = 0;
   let end = st.length;
   while (!palidromeCheck(output)) {
        let arr = output.split('');
        arr.splice(end, 0, st[start]);
        output = arr.join('');
        start++;
   }
   return output;
}
