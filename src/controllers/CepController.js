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
        try{
            const CEP = this.view.searchCEP();
            if(this.validateCEP(CEP) === true){
                this.view.Loading();
                setTimeout(()=>{
                    this.apiCEP(CEP);
                },2000)
            }
            else{
                this.view.Erro();
            }
        }
        catch(e){
            return e;
        }
    }

    validateCEP(cep){
        try{
            const CEPNumber = Number(cep);
            const resultValidate = checkCEP(CEPNumber);
            if(resultValidate === 'CEP Invalido!'){
                throw new Error('CEP Invalido!');
            }
            return resultValidate;
        }catch(e){
            return e;
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