export function checkCEP(cep){
    const cepString = String(cep);
    
    if(cepString.length < 8){
        return false;
    }
    else if(typeof(cep)!= 'number'){
        return false;
    }
    else{
        return true;
    }
}