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

console.log(divisions(100, 2))
