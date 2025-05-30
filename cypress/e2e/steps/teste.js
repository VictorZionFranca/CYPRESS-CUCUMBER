import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://gestao-barbearia.vercel.app";

// Login inválido
When("preencho email {string} e senha {string}", (email, senha) => {
  cy.get('input[id="email"]').type(email);
  cy.wait(500);
  cy.get('input[id="password"]').type(senha);
  cy.wait(500);
  cy.get('button[type="submit"]').click();
  cy.wait(500);
});

Then("devo ver uma mensagem de erro de login", () => {
  cy.contains("Erro ao fazer login. Tente novamente.").should("be.visible");
  cy.wait(1500);
});

// Login
Given("que estou na página de login", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit(`${url}/login`);
  cy.wait(1500);
});

When("preencho email e senha corretos", () => {
  cy.get('input[id="email"]').type("teste@gmail.com");
  cy.wait(500);
  cy.get('input[id="password"]').type("teste123");
  cy.wait(500);
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
    cy.wait(500);
    cy.get('input[id="valor"]').type(valor);
    cy.wait(500);
    cy.get('input[id="duracaoEmMinutos"]').type(duracao);
    cy.wait(500);
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
    cy.wait(500);
    cy.get('input[id="valor"]').clear().type(novoValor);
    cy.wait(500);
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

// Unidades
When("acesso a página de unidades", () => {
  cy.visit(`${url}/unidades`);
  cy.wait(1500);
});

When("busco pela unidade {string}", (nome) => {
  cy.get('input[placeholder="Buscar unidade..."]').type(nome);
  cy.wait(1000); // Espera o filtro ser aplicado
});

Then("não deve encontrar nenhuma unidade", () => {
  cy.contains("Nenhuma unidade encontrada.").should("be.visible");
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
  cy.wait(500);
  cy.contains("Cadastrar").click();
  cy.wait(1500);
});

Then("a forma de pagamento {string} deve aparecer na lista", (nome) => {
  cy.contains(nome).should("exist");
  cy.wait(1500);
});

When("busco e excluo a forma de pagamento {string}", (nome) => {
  // Preenche o campo de busca
  cy.get('input[placeholder="Buscar forma de pagamento..."]').type(nome);
  cy.wait(1000); // Espera filtrar a lista

  // Clica no botão de excluir dentro da linha filtrada
  cy.contains("tr", nome).within(() => {
    cy.get('button[title="Excluir"]').click();
  });

  cy.wait(1000); // Espera abrir o modal

  // Confirma a exclusão no modal
  cy.get("button").contains("Excluir").should("be.visible").click();
  cy.wait(1500);
});

Then("a forma de pagamento {string} não deve mais estar na lista", (nome) => {
  cy.contains(nome).should("not.exist");
  cy.wait(1500);
});

// Logout
Then("faço logout da aplicação", () => {
  cy.visit(`${url}/`); // Vai para o dashboard
  cy.wait(1500);
  cy.get("li").filter(':contains("Sair")').click({ force: true });
  cy.wait(1500);
});
