const { createStair } = require('./questao001');

describe('questao001', () =>{
    it('verify escade with 4 steps', ()=> {
        const escada = "   *\n  **\n ***\n****\n";
        expect(createStair(4)).toBe(escada);
    });
});
