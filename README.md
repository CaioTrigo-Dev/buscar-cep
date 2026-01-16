# 🔍 Busca CEP

Sistema de consulta de CEP integrado com a API ViaCEP, desenvolvido com JavaScript vanilla e arquitetura MVC.

![Badge](https://img.shields.io/badge/Status-Concluído-success)
![Badge](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Badge](https://img.shields.io/badge/Arquitetura-MVC-blue)
![Badge](https://img.shields.io/badge/Testes-Jest-red)

## 📋 Sobre o Projeto

Aplicação web que permite buscar informações de endereço através do CEP (Código de Endereçamento Postal) brasileiro. O projeto foi desenvolvido com foco em boas práticas de programação, utilizando Async/Await, consumo de APIs REST, arquitetura MVC e testes unitários.

### 🎯 Objetivo

Demonstrar domínio de JavaScript assíncrono, manipulação de APIs REST, organização de código com padrões de arquitetura profissionais e implementação de testes automatizados.

## ✨ Funcionalidades

- ✅ Busca de endereço por CEP
- ✅ Validação de formato do CEP
- ✅ Integração com API ViaCEP
- ✅ Feedback visual de loading
- ✅ Tratamento de erros amigável
- ✅ Interface responsiva
- ✅ Testes unitários automatizados

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+**
  - Async/Await
  - Fetch API
  - Classes (POO)
  - Módulos ES6 (Import/Export)
- **HTML5**
- **CSS3**
- **API REST** - ViaCEP
- **Jest** - Framework de testes

## 🏗️ Arquitetura

O projeto utiliza o padrão **MVC (Model-View-Controller)** para separação de responsabilidades:
```
src/
├── controllers/     # Lógica de controle e orquestração
├── models/          # Estrutura e processamento de dados
├── services/        # Comunicação com APIs externas
└── views/           # Manipulação da interface (DOM)
```

### 📂 Estrutura de Pastas
```
ProjetoCEP/
│
├── index.html
├── app.js                       # Ponto de entrada da aplicação
├── package.json                 # Dependências e scripts
├── jest.config.cjs              # Configuração do Jest
├── babel.config.js              # Configuração do Babel
│
├── assets/
│   └── css/
│       └── style.css
│
├── src/
│   ├── controllers/
│   │   └── CepController.js     # Orquestração da aplicação
│   │
│   ├── models/
│   │   └── CepModel.js          # Processamento de dados do CEP
│   │
│   ├── services/
│   │   └── CepService.js        # Integração com API ViaCEP
│   │
│   └── views/
│       └── CepView.js           # Manipulação da interface
│
├── tests/
│   └── unit/
│       ├── CepController.test.js
│       ├── CepModel.test.js
│       ├── CepService.test.js
│       ├── CepView.test.js
│       └── validators.test.js
│
└── utils/
    └── validators.js            # Funções de validação
```

## 🚀 Como Executar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Node.js instalado (para rodar testes)
- Servidor local (não funciona com `file://`)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/CaioTrigo-dev/busca-cep
cd busca-cep

# Instale as dependências (para testes)
npm install
```

### Executar a Aplicação

#### Opção 1: Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito no `index.html`
3. Selecione **"Open with Live Server"**

#### Opção 2: Python
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

#### Opção 3: Node.js
```bash
npx http-server
# Acesse o endereço fornecido
```

### Executar Testes
```bash
# Rodar todos os testes
npm test
```

## 💻 Como Usar

1. Digite um CEP válido no campo de busca (apenas números, 8 dígitos)
2. Clique no botão "Buscar"
3. Aguarde o carregamento
4. Visualize as informações do endereço

### Exemplos de CEP para Teste

- `01310100` - Avenida Paulista, São Paulo/SP
- `20040020` - Centro, Rio de Janeiro/RJ
- `30130100` - Centro, Belo Horizonte/MG

## 🔄 Fluxo de Dados
```
┌─────────────┐
│   Usuário   │
└──────┬──────┘
       │ Digite CEP
       ↓
┌─────────────┐
│    View     │ ← Captura input
└──────┬──────┘
       │ Chama Controller
       ↓
┌─────────────┐
│ Controller  │ ← Valida e orquestra
└──────┬──────┘
       │
       ├→ Validators (valida formato)
       │
       ├→ CepService (busca API)
       │      ↓
       │  ViaCEP API (Fetch/Async-Await)
       │      ↓
       ├→ CepModel (processa dados)
       │
       └→ View (exibe resultado)
```

## 🎓 Conceitos Aplicados

### JavaScript Assíncrono
- **Async/Await**: Sintaxe moderna para operações assíncronas
- **Fetch API**: Requisições HTTP que retornam Promises
- **Try/Catch**: Tratamento de erros em código assíncrono

### Programação Orientada a Objetos
- **Classes**: Organização do código em componentes
- **Encapsulamento**: Separação de responsabilidades
- **Instanciação**: Criação de objetos reutilizáveis
- **Métodos**: Funções associadas às classes

### Padrões de Projeto
- **MVC**: Separação Model-View-Controller
- **Service Layer**: Abstração de serviços externos
- **Singleton Pattern**: Instância única do Controller

### Testes Automatizados
- **Jest**: Framework de testes JavaScript
- **Testes Unitários**: Validação de funções isoladas
- **Mocks**: Simulação de APIs e dependências externas
- **Cobertura de Código**: Medição de código testado

### Boas Práticas
- Tratamento robusto de erros
- Validação de dados no frontend
- Código limpo e organizado
- Módulos ES6 para melhor estrutura
- Separação clara de responsabilidades
- Testes automatizados para garantia de qualidade

## 🧪 Testes Unitários

O projeto conta com testes automatizados para garantir a qualidade e confiabilidade do código.

### Cobertura de Testes

- ✅ **Validators**: Validação e formatação de CEP
- ✅ **CepModel**: Processamento de dados
- ✅ **CepService**: Integração com API
- ✅ **CepController**: Lógica de orquestração
- ✅ **CepView**: Manipulação de interface

### Tecnologias de Teste

- **Jest**: Framework de testes
- **Babel**: Transpilação para compatibilidade

### Comandos de Teste
```bash
# Executar todos os testes
npm test
```

## 🐛 Tratamento de Erros

O sistema trata os seguintes cenários:

- ❌ CEP com formato inválido (menos de 8 dígitos)
- ❌ CEP contendo letras ou caracteres especiais
- ❌ CEP não encontrado na base de dados
- ❌ Erro de conexão com a API
- ❌ Campo vazio ao tentar buscar

## 📊 Métricas do Projeto

- **Arquitetura**: MVC
- **Cobertura de Testes**: Em desenvolvimento
- **Padrões**: ES6+, POO, Async/Await

## 📚 Aprendizados

Este projeto me permitiu aprofundar conhecimentos em:

- Arquitetura MVC em JavaScript vanilla
- Consumo de APIs REST com Fetch e Async/Await
- Programação Orientada a Objetos em JavaScript
- Implementação de testes unitários com Jest
- Manipulação do DOM
- Organização de código profissional
- Tratamento de erros assíncronos
- Garantia de qualidade com testes automatizados

## 👤 Autor

**Caio Cesar Macedo Trigo**

- GitHub: [@CaioTrigo-dev](https://github.com/CaioTrigo-dev)
- LinkedIn: [Caio Trigo](https://linkedin.com/in/caio-trigo-7a653a33b/)
- Email: Caiorj95@gmail.com
