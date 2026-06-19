import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Tentativa de login com email inválido', () => {

    let user
    let messages

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.invalid

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })

    it('Deve exibir mensagem de email inválido', () => {

        LoginPage.visit()

        LoginPage.login(
            Cypress.env(user.email),
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.invalidEmail
        )


    })

})