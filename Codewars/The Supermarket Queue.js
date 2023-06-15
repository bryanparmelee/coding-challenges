//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  let tills = Array(n ? n : 1).fill(0);
  return customers.reduce((max, customer) => {
    const fastest = tills.indexOf(Math.min(...tills));
    tills[fastest] += customer;
    return Math.max(...tills);
  }, 0);
}

function queueTime2(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}
