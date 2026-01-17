import ControllerCEP from "../../src/controllers/CepController";
import { jest, expect, test, describe, beforeEach } from '@jest/globals';

jest.mock('../../src/views/CepView');
jest.mock('../../src/models/CepModel');
jest.mock('../../src/services/CepServices');

describe('Teste do Controller', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('Iniciação - init', ()=>{
        const controller = new ControllerCEP;

        controller.view.searchCEP.mockReturnValue('21721011');

        controller.init();

        expect(controller.view.searchCEP).toHaveBeenCalledTimes(1);

        expect(controller.view.Loading).toHaveBeenCalledTimes(1);
    })
    
    test('Validador - ValidateCEP', () =>{
        const controller = new ControllerCEP;
        const result = controller.validateCEP('caio');

        expect(result).toBe('CEP Invalido!')
    })

    test('getAPI - Está pegando API ', async ()=>{
        const controller = new ControllerCEP;
        
        
        const mock = {
                    logradouro: "Praça da Sé",
                    bairro: "Sé",
                    localidade: "praça",
                    uf: "SP"
                };
                
                
        controller.servicesCEP.getCEP.mockResolvedValue(mock);

        controller.model.processingData.mockReturnValue(mock);

        await controller.apiCEP(21721011);


        expect(controller.servicesCEP.getCEP).toHaveBeenCalledTimes(1);
        expect(controller.servicesCEP.getCEP).toHaveBeenCalledWith(21721011);


        expect(controller.model.processingData).toHaveBeenCalledTimes(1);
        expect(controller.model.processingData).toHaveBeenCalledWith(mock);

        expect(controller.view.Display).toHaveBeenCalledTimes(1);
        expect(controller.view.Display).toHaveBeenCalledWith(mock);

    })
})