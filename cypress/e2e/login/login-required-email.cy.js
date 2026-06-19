import LoginPage from '../../pages/LoginPage'

describe('Login - Email obrigatório', () => {

    let user
    let messages

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.admin

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })


    it('Deve exibir mensagem exigindo email válido', () => {

        LoginPage.visit()

        LoginPage.fillPassword(
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.invalidEmail
        )

    })

})