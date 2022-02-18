let verifyPassword = (word)  => {
    const regexp = new RegExp(/[^a-zA-Z 0-9]+/g);
    let n = regexp.exec(word);
  
    const regexpLower = new RegExp(/[a-z]+/g);
    let lower = regexpLower.exec(word);
  
    const regexpUpcase = new RegExp(/[A-Z]+/g);
    let upCase = regexpUpcase.exec(word);
  
    const regexpNumber = new RegExp(/[0-9]+/g);
    let num = regexpNumber.exec(word);
  
    if(word.length < 6){
      return 6 - word.length
    }else if(n === null){
      return "coloque um caracter especial na senha";
    }else if(upCase === null || lower === null){
      return "coloque pelo menos uma letra maúscula ou minúscala";
    }else if(num === null){
      return 'coloque pelo menos um número na senha';
    }
   
    return 'success'
  }
  
  console.log(verifyPassword('AA*A4aA'))
  module.exports = { verifyPassword }