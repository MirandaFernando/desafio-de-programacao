let possibleCombinations = (str) =>{
  let combinations = [];
    for(let i = 0 ;i < str.length; i++)
  {
      for(let j = i + 1; j< str.length + 1; j++)
      {
          combinations.push(str.slice(i , j));
      }
  }
 return combinations;
}

const sort = (vet) =>{
  let vetArr = [];
  for(let i = 0; i < vet.length; i++){
  vetArr[i] = vet[i].split('').sort().join('');
  }
  return vetArr;
}


const anagrams = (string) => { 
  let vetArr = sort(possibleCombinations(string));
  let vetAnagram = []
  for(let j = 0; j < vetArr.length; j++){
  for(let i = j+1; i < vetArr.length; i++){
    if(vetArr[j] === vetArr[i]){
      vetAnagram.push(vetArr[j]);
    }
  }
}
return vetAnagram.length
}
const result = anagrams('ifailuhkqq')
console.log(result);

module.exports = { anagrams }

