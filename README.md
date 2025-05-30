🚀 CYPRESS-CUCUMBER
Automação de testes end-to-end utilizando Cypress integrado com Cucumber (BDD) e geração de relatórios com Mochawesome.

🧠 Sobre o Projeto
Este projeto tem como objetivo realizar testes automatizados utilizando o Cypress em conjunto com o Cucumber, seguindo a metodologia BDD (Behavior Driven Development), permitindo escrever cenários de teste em linguagem natural (Gherkin).

Além disso, é utilizada a geração de relatórios personalizados com cypress-mochawesome-reporter, facilitando a análise dos resultados dos testes.

🔧 Tecnologias e Ferramentas
Cypress - Framework de testes E2E

Cucumber (BDD) - Especificação de testes em linguagem natural

@badeball/cypress-cucumber-preprocessor - Integração Cypress + Cucumber

Mochawesome - Geração de relatórios em HTML/JSON

esbuild - Bundler utilizado no preprocessamento dos testes

📂 Estrutura de Pastas
lua
Copiar
Editar
CYPRESS-CUCUMBER/
├── cypress/
│   ├── e2e/
│   │   └── arquivos.feature
│   ├── support/
│   │   └── e2e.ts
│   ├── reports/
├── node_modules/
├── cypress.config.ts
├── package.json
├── README.md
🚀 Como executar o projeto
🔸 Instalar as dependências:
bash
Copiar
Editar
npm install
🔸 Executar os testes no modo interativo (GUI):
bash
Copiar
Editar
npx cypress open
🔸 Executar os testes no modo headless (terminal):
bash
Copiar
Editar
npx cypress run
🧪 Geração de Relatórios
Após rodar os testes no modo run, os relatórios serão gerados automaticamente na pasta:

bash
Copiar
Editar
cypress/reports/
O relatório estará disponível em formato JSON e pode ser configurado para gerar em HTML se desejar.

🧠 Como escrever testes no padrão BDD (Cucumber)
Os testes são escritos no formato Gherkin, dentro de arquivos .feature. Exemplo:

gherkin
Copiar
Editar
Feature: Login do usuário

  Scenario: Login bem-sucedido
    Given que o usuário acessa a página de login
    When informa credenciais válidas
    Then ele deve ser redirecionado para a página inicial
Cada passo (Given, When, Then) possui sua implementação no arquivo de suporte utilizando Cypress para interagir com a aplicação.

🔗 Referências
Documentação Cypress

Cucumber Preprocessor

Mochawesome Reporter

📝 Licença
Este projeto é de caráter educacional e livre para estudo e aprimoramento.
