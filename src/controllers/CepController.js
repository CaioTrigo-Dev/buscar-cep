import { checkCEP } from "../../utils/validators.js";
import ViewCEP from "../views/CepView.js";
import ModelCEP from "../models/CepModel.js";
import ServiceCEP from "../services/CepServices.js";


class ControllerCEP {
    constructor(){
        this.view = new ViewCEP;
        this.model = new ModelCEP;
        this.servicesCEP = new ServiceCEP;
    }

    init(){
        const CEP = this.view.searchCEP()
        if(this.validateCEP(CEP)){
            this.view.Erro()
        }
        this.view.Loading()
    }

    validateCEP(cep){
        try{
            const resultValidate = checkCEP(Number(cep))
            if(resultValidate === true){
                this.apiCEP(cep)
            }
            else{
                throw new Error('CEP Invalido!');
            }
        }catch(e){
            return e.message;
        }
    }

    async apiCEP(cep){
        try{
            const data = await this.servicesCEP.getCEP(cep);
            const processedData = this.model.processingData(data);
            this.view.Display(processedData);
        }catch(e){
            return e;
        }
        
    }
}

export default ControllerCEP;