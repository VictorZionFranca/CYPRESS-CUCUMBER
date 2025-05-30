Feature: Login na Barbearia

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When eu preencho email e senha corretos
    Then eu devo acessar o dashboard

  Scenario: Login com senha inválida
    Given que estou na página de login
    When eu preencho email correto e senha incorreta
    Then eu devo ver uma mensagem de erro
