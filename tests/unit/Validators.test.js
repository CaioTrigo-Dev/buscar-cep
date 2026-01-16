import { checkCEP } from '../../utils/validators.js';


test('Validando CEP', ()=>{
    const cep = 21721011;

    const result = checkCEP(cep);

    expect(result).toBe(true);
})

test('Validando - CEP Menos de 8 Caracteres', ()=>{
    const cep = 2172101;

    const result = checkCEP(cep);

    expect(result).toBe('CEP Invalido!')
})

test('Validando - CEP com string', ()=>{
    const cep = '21721011';

    const result = checkCEP(cep);

    expect(result).toBe('Apenas Número');
})