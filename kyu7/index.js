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