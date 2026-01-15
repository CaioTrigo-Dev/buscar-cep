import ControllerCEP from './src/controllers/CepController.js';
const btnCEP = document.getElementById('btnCEP');

btnCEP.addEventListener('click', ()=>{
    const controller = new ControllerCEP;

    controller.init();
})