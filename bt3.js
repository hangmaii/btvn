const case1 = "    hOang Bui   ";
console.log(case1.toLowerCase().trim().replace('h','H').replace('b','B'));

const case2 = " hOANG      BUI   hOang     ";
const c2 = case2.trim().toLowerCase().split(' ');
const str =' ';
console.log(c2[0].replace('h','H').concat(str,c2[6].replace('b', 'B'),str,c2[9].replace('h','H')));

const case3 = "23traN    dUOng23     ";
const c3 = case3.trim().toLowerCase().split('');
console.log(c3[0].replace('t','T').slice(2,6).concat(str,c3[4].replace('d','D').slice(0,5)));
