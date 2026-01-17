import { beforeEach, describe } from '@jest/globals';
import ServiceCEP from '../../src/services/CepServices.js'

describe('Teste da Class', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    test('Teste API dados MOCK', async ()=>{
        
        const dataMock = {
                    logradouro: "Praça da Sé",
                    bairro: "Sé",
                    localidade: "praça",
                    uf: "SP"
                };
        global.fetch = jest.fn(()=>
            Promise.resolve({
                json: () =>Promise.resolve(dataMock)
            })
        )

        const test = new ServiceCEP;
        const result = await test.getCEP(21721011);
    
        expect(result).toEqual(dataMock);
    
        expect(fetch).toHaveBeenCalledWith("https://viacep.com.br/ws/21721011/json/")
    })

    test('Deve retornar erro quando a API estiver FORA DO AR', async () => {
    
    global.fetch = jest.fn(() => 
        Promise.reject(new Error("Falha de conexão com a API"))
    );

    const service = new ServiceCEP;
    const result = await service.getCEP(21721011);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Falha de conexão com a API");
});
})