//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  const regex = /.+\/\/|www.|\..+/g;
  return url.replace(regex, "");
}
