class ModelCEP{
    formatData(data){
        if(!data || !data.logradouro){
            throw new Error("Endereço incompleto ou não encontrado");
        }

        return {
            rua: data.logradouro,
            complemento: data.complemento || 'Sem Complemento',
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
        };
    }
}

export default ModelCEP;
