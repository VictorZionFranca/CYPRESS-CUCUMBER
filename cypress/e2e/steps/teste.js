import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://gestao-barbearia.vercel.app";

// Login
Given("que estou na página de login", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit(`${url}/login`);
  cy.wait(1500);
});

When("preencho email e senha corretos", () => {
  cy.get('input[id="email"]').type("teste@gmail.com");
  cy.get('input[id="password"]').type("teste123");
  cy.get('button[type="submit"]').click();
  cy.wait(1500);
});

Then("devo acessar o dashboard", () => {
  cy.url().should("eq", `${url}/`);
  cy.wait(1500);
});

// Serviços
When("acesso a página de serviços", () => {
  cy.visit(`${url}/servicos`);
  cy.wait(1500);
});

When(
  "adiciono um serviço com nome {string}, valor {string} e duração {string}",
  (nome, valor, duracao) => {
    cy.contains("Cadastrar Serviço").click();
    cy.wait(1500);
    cy.get('input[id="nomeDoServico"]').type(nome);
    cy.get('input[id="valor"]').type(valor);
    cy.get('input[id="duracaoEmMinutos"]').type(duracao);
    cy.get('button[type="submit"]').click();
    cy.wait(1500);
  }
);

Then("o serviço {string} deve aparecer na lista", (nome) => {
  cy.contains(nome).should("exist");
  cy.wait(1500);
});

When(
  "eu edito o serviço {string} para nome {string} e valor {string}",
  (nomeAtual, novoNome, novoValor) => {
    cy.contains("tr", nomeAtual).within(() => {
      cy.get('button[title="Editar"]').click();
    });

    cy.wait(1500);

    cy.get('input[id="nomeDoServico"]').clear().type(novoNome);
    cy.get('input[id="valor"]').clear().type(novoValor);

    cy.get('button[type="submit"]').click();

    cy.wait(1500);
  }
);

Then("o serviço {string} deve estar atualizado na lista", (nome) => {
  cy.contains(nome).should("exist");
  cy.wait(1500);
});

When("eu excluo o serviço {string}", (nome) => {
  cy.contains("tr", nome).within(() => {
    cy.get('button[title="Excluir"]').click();
  });

  cy.wait(1500);

  cy.get("button").contains("Excluir").should("be.visible").click();
  cy.wait(1500);
});

Then("o serviço {string} não deve mais estar na lista", (nome) => {
  cy.contains(nome).should("not.exist");
  cy.wait(1500);
});

// Forma de Pagamento
When("acesso a página de forma de pagamento", () => {
  cy.visit(`${url}/formaPagamento`);
  cy.wait(1500);
});

When("adiciono uma forma de pagamento com nome {string}", (nome) => {
  cy.contains("Nova Forma de Pagamento").click();
  cy.wait(1500);
  cy.get('input[id="nome"]').type(nome);
  cy.contains("Cadastrar").click();
  cy.wait(1500);
});

Then("a forma de pagamento {string} deve aparecer na lista", (nome) => {
  cy.contains(nome).should("exist");
  cy.wait(1500);
});

When("eu excluo a forma de pagamento {string}", (nome) => {
  cy.contains("tr", nome).within(() => {
    cy.get('button[title="Excluir"]').click();
  });

  cy.wait(1500);

  cy.get("button").contains("Excluir").should("be.visible").click();
  cy.wait(1500);
});

Then(
  "a forma de pagamento {string} não deve mais estar na lista",
  (nome) => {
    cy.contains(nome).should("not.exist");
    cy.wait(1500);
  }
);

// Logout
Then("faço logout da aplicação", () => {
  cy.visit(`${url}/`); // Vai para o dashboard
  cy.wait(1500);
  cy.get("li").filter(':contains("Sair")').click({ force: true });
  cy.wait(1500);
});
