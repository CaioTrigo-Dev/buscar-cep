class ServiceCEP{
    constructor(){
        this.baseUrl = 'https://viacep.com.br/ws/';
    }
    async getCEP(cep){
        const cleanCep = String(cep).replace(/\D/g, '');

        const url = `${this.baseUrl}/${cleanCep}/json`;

        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`Erro na Conexão com API: ${response.status}`);
            }

            const data = await response.json();

            if(data.error){
                throw new Error('CEP Não Encontrado na Base de Dados');
            }

            return data;
        }catch(error){
            throw error;
        }
    }
}

export default ServiceCEP;