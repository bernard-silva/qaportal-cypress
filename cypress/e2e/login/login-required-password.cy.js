import LoginPage from '../../pages/LoginPage'

describe('Login - Senha obrigatória', () => {

    let user

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.admin

            })

    })

    it('Deve exibir mensagem ao informar Email e deixar Password vazia', () => {

        LoginPage.visit()

        LoginPage.fillEmail(
            Cypress.env(user.email)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            'Password must be at least 6 characters long.'
        )

    })

})