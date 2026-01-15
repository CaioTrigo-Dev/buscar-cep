class ServiceCEP{
    constructor(){
    }

    async getCEP(cep){
        try{
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const data = await fetch(url)
            const json = await data.json()
            if(json.erro){
                throw new Error('CEP não encontrado');
            }
            console.log(json)
            return json;
            
        }catch(erro){
            return erro
        }
    }
}

export default ServiceCEP;