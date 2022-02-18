function createStair(n){
    let filledArray = new Array(n).fill(' ');
    let result = '';
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('*');
        console.log(filledArray.join(""));
        result += filledArray.join("") + "\n";
        n--;
    }
  return result;
}

createStair(10);

module.exports = { createStair }