const { verifyPassword } = require('./questao002');

describe('questao002', () =>{
    it('password with 1 caracter', ()=> {
        expect(verifyPassword("Y")).toBe(5);
    });
    it('password with 2 caracter', ()=> {
        expect(verifyPassword("Ya")).toBe(4);
    });
    it('password with 3 caracter', ()=> {
        expect(verifyPassword("Ya2")).toBe(3);
    });
    it('password with 4 caracter', ()=> {
        expect(verifyPassword("Ya2!")).toBe(2);
    });
    it('password with 5 caracter', ()=> {
        expect(verifyPassword("Ya2!a")).toBe(1);
    });
});
