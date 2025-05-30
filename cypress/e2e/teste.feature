Feature: Gestão da Barbearia

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When preencho email "emailerrado@gmail.com" e senha "senhaerrada"
    Then devo ver uma mensagem de erro de login

  Scenario: Login na aplicação
    Given que estou na página de login
    When preencho email e senha corretos
    Then devo acessar o dashboard

  Scenario: Criar um serviço
    When acesso a página de serviços
    And adiciono um serviço com nome "Corte Teste", valor "50" e duração "30"
    Then o serviço "Corte Teste" deve aparecer na lista

  Scenario: Editar um serviço
    When acesso a página de serviços
    And eu edito o serviço "Corte Teste" para nome "Corte Atualizado" e valor "60"
    Then o serviço "Corte Atualizado" deve estar atualizado na lista

  Scenario: Excluir um serviço
    When acesso a página de serviços
    And eu excluo o serviço "Corte Atualizado"
    Then o serviço "Corte Atualizado" não deve mais estar na lista

  Scenario: Buscar uma unidade inexistente
    When acesso a página de unidades
    And busco pela unidade "Filial"
    Then não deve encontrar nenhuma unidade

  Scenario: Adicionar uma forma de pagamento
    When acesso a página de forma de pagamento
    And adiciono uma forma de pagamento com nome "Pix Teste"
    Then a forma de pagamento "Pix Teste" deve aparecer na lista

  Scenario: Buscar e excluir uma forma de pagamento
    When acesso a página de forma de pagamento
    And busco e excluo a forma de pagamento "Pix Teste"
    Then a forma de pagamento "Pix Teste" não deve mais estar na lista

  Scenario: Logout da aplicação
    Then faço logout da aplicação
