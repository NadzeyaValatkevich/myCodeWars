//task1 Find the position!
function position(letter) {
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const place = (array.indexOf(letter) + 1);
    return `Position of alphabet: ${place}`
};
console.log(position('z'))