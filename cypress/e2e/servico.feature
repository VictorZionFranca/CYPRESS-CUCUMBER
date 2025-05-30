Feature: Criar e excluir um serviço

  Scenario: Cadastrar e excluir um serviço com sucesso
    Given que estou logado e na página de serviços
    When preencho os dados do serviço
    And clico no botão de cadastrar
    Then o serviço deve aparecer na lista

    When clico no botão de excluir do serviço
    Then o serviço deve ser removido da lista
