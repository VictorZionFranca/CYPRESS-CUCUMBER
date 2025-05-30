import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const nomeServico = 'Teste Cypress Auto';

// Acessa a página de serviços
Given('que estou logado e na página de serviços', () => {
  cy.visit('https://gestao-barbearia.vercel.app/login');

  cy.get('input[id="email"]').type('vzion435@gmail.com');
  cy.get('input[id="password"]').type('admin123');
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/'); // garante que o login foi feito
  cy.visit('https://gestao-barbearia.vercel.app/');
  cy.visit('https://gestao-barbearia.vercel.app/servicos'); 
});



// Preenche os dados do serviço
When('preencho os dados do serviço', () => {
  cy.get('input[placeholder="Ex: Corte Masculino"]').type(nomeServico);
  cy.get('input[placeholder="Ex: 50"]').type('99');
  cy.get('input[placeholder="Ex: 30 minutos"]').type('60 minutos');
});

// Clica no botão de cadastrar
When('clico no botão de cadastrar', () => {
  cy.get('button').contains('Cadastrar Serviço').click();
});

// Valida que o serviço está na lista
Then('o serviço deve aparecer na lista', () => {
  cy.contains(nomeServico).should('be.visible');
});

// Clica no botão de excluir do serviço
When('clico no botão de excluir do serviço', () => {
  cy.contains('tr', nomeServico)
    .find('button')
    .contains('Excluir')
    .click();
});

// Valida que o serviço foi removido
Then('o serviço deve ser removido da lista', () => {
  cy.contains(nomeServico).should('not.exist');
});
