export function checkCEP(cep){
    try{
        if(String(cep).length < 8){
            throw new Error('CEP Invalido!')
        }
        else if(typeof(cep) != 'number'){
            throw new Error('Apenas Número')
        }
        else{
            return true;
        }
    }catch(e){
        return e.message;
    }
}

