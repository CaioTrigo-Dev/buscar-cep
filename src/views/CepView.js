class ViewCEP{
    constructor(){
        this.input = document.getElementById('CEP').value;
        this.btnSearch = document.getElementById('btnCEP');
        this.divResult = document.getElementById('result');
    }

    searchCEP(){
        return this.input;
    }

    Display(data){
        const p = document.getElementById('resultCEP');
        p.innerHTML = data;
    }
    Loading(){
        this.divResult.innerHTML = '<p id="resultCEP" class=".result">Buscando CEP...</p>'
    }

    Erro(){
        this.divResult.innerHTML = `<p id="resultCEP" class=".result">CEP INVÁLIDO</p>`
    }
}

export default ViewCEP;