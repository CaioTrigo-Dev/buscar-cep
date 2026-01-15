class ModelCEP{
    constructor(){
    }
    processingData(data){
        try{
            if(data.logradouro){
                return `
                    Rua: ${data.logradouro}<br>
                    Complemento: ${data.complemento}<br>
                    Bairro: ${data.bairro}<br>
                    Localidade: ${data.localidade}<br>
                    UF: ${data.uf}
                    `
            }
            else{
                throw new Error('Não tem Endereço');
            }
        }catch(e){
            return e.message;
        }
    }
}

export default ModelCEP;
