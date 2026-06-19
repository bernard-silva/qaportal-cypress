import LoginPage from '../../pages/LoginPage'

describe('Login - Email obrigatório', () => {

    let user

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.admin

            })

    })

    it('Deve exibir mensagem ao informar Senha e deixar Email vazio', () => {

        LoginPage.visit()

        LoginPage.fillPassword(
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            'Please enter a valid email address.'
        )

    })

})