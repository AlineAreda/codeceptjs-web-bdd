# codeceptjs-web-bdd

### 🛠️  Tecnologias
 
[Node.js](https://nodejs.org/) v16 ou superior para executar;
[CodeceptJS](https://codecept.io/) Framework usado para automação;
[Playwright](https://codecept.io/playwright/#setup) biblioteca Node  usada na automação do projeto;
[Allure Reports](https://codecept.io/plugins/#allure) relatórios de testes executados.



### 👨🏻‍💻 Como executar o projeto


Execute o comando abaixo para instalar das dependências do projeto:

npm install --save-dev playwright@^1.18
npm i codeceptjs --save-dev
npm install -g allure-commandline --save-dev

Execute o comando abaixo rodar os testes

npx codeceptjs run --steps


Execute o comando para rodar os testes e obter relatórios:

npx codeceptjs run --plugins allure
allure serve output
