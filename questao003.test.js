const { anagrams} = require('./questao003');

describe('questao003', () =>{
    it('check number of anagrams ', ()=> {
        
        expect(anagrams("ifailuhkqq")).toBe(3);
    });
});
