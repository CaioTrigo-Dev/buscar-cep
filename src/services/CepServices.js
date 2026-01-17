class ServiceCEP{
    constructor(){
    }

    async getCEP(cep){
        try{
            const cleanCEP = Number(cep);
            const url = `https://viacep.com.br/ws/${cleanCEP}/json/`;
            const data = await fetch(url)
            const json = await data.json()
            return json;
        }catch(erro){
            return erro
        }
    }
}

export default ServiceCEP;