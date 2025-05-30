# 🚀 CYPRESS + CUCUMBER + MOCHAWESOME

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-blue)
![Mochawesome](https://img.shields.io/badge/Mochawesome-Report-red)
![Status](https://img.shields.io/badge/Status-Working-success)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📜 Descrição do Projeto

Este projeto tem como objetivo realizar testes automatizados em uma aplicação web utilizando:

- ✅ **Cypress** – Framework de testes End-to-End moderno.
- ✅ **Cucumber (BDD)** – Permite escrever os testes em linguagem natural (Gherkin).
- ✅ **Mochawesome** – Ferramenta para geração de relatórios de testes em formatos visualmente amigáveis (HTML e JSON).

O principal foco é a aplicação de testes automatizados de forma colaborativa, legível e profissional, simulando cenários reais.

---

## 🚀 Funcionalidades

- ✔️ Escrita de testes no padrão **Gherkin (.feature)**.
- ✔️ Integração do Cypress com o Cucumber para desenvolvimento orientado a comportamento (BDD).
- ✔️ Geração de relatórios detalhados com **Mochawesome**.
- ✔️ Execução dos testes tanto via interface gráfica quanto via linha de comando (headless).

---

## 🛠️ Tecnologias Utilizadas

- ⚙️ [Cypress](https://docs.cypress.io/)
- ⚙️ [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- ⚙️ [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- ⚙️ [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)
- ⚙️ TypeScript

---

## ⚙️ Instalação e Execução

### 🔹 Instalar dependências

```bash
npm install
```
### 🔹 Abrir Cypress (modo interativo)

```bash
npx cypress open
```

### 🔹 Gerar Relatório

```bash
npx cypress run
```

🔗 Integração Cypress + Cucumber + Mochawesome
A integração foi feita adicionando:

✅ Suporte ao pré-processamento de arquivos .feature usando o Cucumber Preprocessor.

✅ Utilização do esbuild para otimizar o processamento dos testes.

✅ Geração automática de relatórios em JSON e HTML utilizando Mochawesome.

### 🔥 Configuração do arquivo cypress.config.ts

```
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      mochawesome(on);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
```
## 📊 Relatórios Gerados
Após a execução dos testes, os relatórios são gerados na pasta:

```bash
cypress/reports/
```

🔥 O relatório HTML contém:

✔️ Status de cada teste (✅ Passou / ❌ Falhou).

✔️ Descrição dos cenários.

✔️ Logs detalhados da execução.

### 🧠 Justificativa dos Testes

✅ Uso de Cucumber (BDD) para uma escrita mais colaborativa e entendimento fácil tanto por desenvolvedores quanto stakeholders.

✅ Uso do Cypress para execução robusta de testes E2E.

✅ Integração com Mochawesome para geração de relatórios profissionais e acompanhamento da qualidade dos testes.

🏁 Conclusão
Este projeto demonstra como estruturar testes de forma profissional, utilizando boas práticas de automação, geração de relatórios e desenvolvimento orientado a comportamento (BDD). A integração das ferramentas permite um fluxo completo e eficiente para garantir a qualidade do software.
