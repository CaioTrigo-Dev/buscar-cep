import ModelCEP from "../../src/models/CepModel";


test('Tratamento do Dados - Model', ()=>{
    const dataMock = {
        logradouro: "Rua teste",
        complemento: "apt 123",
        bairro: "testolândia",
        localidade: "Testolândia",
        uf: "TS"
    }
    const modifiedDataMock = `
                    Rua: Rua teste<br>
                    Complemento: apt 123<br>
                    Bairro: testolândia<br>
                    Localidade: Testolândia<br>
                    UF: TS
                    `
    const classModel = new ModelCEP;
    const result = classModel.processingData(dataMock);

    expect(result).toEqual(modifiedDataMock);
})

test('Sem Endereço - Model', ()=>{
    const dataMock = {
        complemento: "apt 123",
        bairro: "testolândia",
        localidade: "Testolândia",
        uf: "TS"
    }
    const classModel = new ModelCEP;
    const result = classModel.processingData(dataMock);

    expect(result).toEqual('Não tem Endereço');
})