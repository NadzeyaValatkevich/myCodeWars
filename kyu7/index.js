//task 1 Find the anonymous function

var FindFunction = function(func, arr) {
  let cb;

  for(let i of func) {
    if(typeof i === 'function') {
      cb = i
    }
  };

const newArray = arr.filter(cb);
return newArray
 
};

console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]))

//task2 Number of Divisions
const divisions = (n, divisor) => {
let num = 0
if(n >= divisor) {
    n = n / divisor;
    num += 1;
 return num + divisions(n, divisor);
} else {
    return 0
}
};

console.log(divisions(100, 2));

//task3 Credit Card Mask
function maskify(cc) {
  let arr = cc.split('');

if(cc.length === 1) {
   return cc;
} else {
  for(let i = 0; i < (arr.length - 4); i++) {
   arr[i] = '#'; 
  };   
}

let newStr = arr.join('');

  return newStr;
  
};

console.log(maskify('4556364607935616'))
