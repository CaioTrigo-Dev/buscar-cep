import { checkCEP } from "../../utils/validators.js";
import ViewCEP from "../views/CepView.js";
import ModelCEP from "../models/CepModel.js";
import ServiceCEP from "../services/CepServices.js";


class ControllerCEP {
    constructor(){
        this.view = new ViewCEP();
        this.model = new ModelCEP();
        this.services = new ServiceCEP();
    }

    async init(){
        try{
            const cep = this.view.getCepValue();
            if(!this.isValidCEP(cep)){
                this.view.renderError("CEP Inválido");
                return;
            }
            this.view.renderLoading();

            await this.handleCEPSearch(cep);
        }
        catch(error){
            console.error(error);
            this.view.renderError("Erro ao Buscar CEP. Tente Novamente");
        }
    }

    isValidCEP(cep){
        const cepNumber = Number(cep);

        if(checkCEP(cepNumber)){
            return true;
        }
        else{
            return false;
        }
    }

    async handleCEPSearch(cep){
        const data = await this.services.getCEP(cep);

        if(!data){
            throw new Error("Nenhum dado encontrado");
        }

        const processedData = this.model.formatData(data);
        this.view.renderSucess(processedData);
    }
}

export default ControllerCEP;