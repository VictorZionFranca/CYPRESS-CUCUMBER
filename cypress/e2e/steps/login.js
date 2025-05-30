import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página de login', () => {
  cy.visit('https://gestao-barbearia.vercel.app');
});

When('eu preencho email e senha corretos', () => {
  cy.get('input[id="email"]').type('vzion435@gmail.com');
  cy.get('input[id="password"]').type('admin123');
  cy.get('button[type="submit"]').click();
});

Then('eu devo acessar o dashboard', () => {
  cy.url().should('include', '/');
});

When('eu preencho email correto e senha incorreta', () => {
  cy.get('input[id="email"]').type('vzion435@gmail.com');
  cy.get('input[id="password"]').type('3122151');
  cy.get('button[type="submit"]').click();
});

Then('eu devo ver uma mensagem de erro', () => {
  cy.contains('Erro ao fazer login. Tente novamente.').should('be.visible');
});
