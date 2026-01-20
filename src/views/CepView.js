class ViewCEP{
    constructor(){
        this.inputElement = document.getElementById('CEP');
        this.btnElement = document.getElementById('btnCEP');
        this.resultContainer = document.getElementById('result');
    }

    getCepValue(){
        return this.inputElement.value;
    }

    cleanInput(){
        this.inputElement.value = '';
    }

    renderSucess(data){
        const html = `
                <div class="cep-card">
                <h3>Endereço Encontrado:</h3>
                <p><strong>Rua:</strong> ${data.rua}</p>
                <p><strong>Complemento:</strong> ${data.complemento}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade/UF:</strong> ${data.cidade} / ${data.estado}</p>
                </div>
                `;

        this.resultContainer.innerHTML = html;
    }

    renderLoading(){
        this.resultContainer.innerHTML = '<p class="loading">Buscando Informações...</p>';
    }

    renderError(message){
        this.resultContainer.innerHTML = `<p class="error-msg">${message}</p>`;
    }
    
    cleanDisplay(){
        this.resultContainer.innerHTML = '';
    }
}

export default ViewCEP;