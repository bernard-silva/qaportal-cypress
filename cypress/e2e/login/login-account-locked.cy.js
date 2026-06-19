import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Tentativa de login com conta bloqueada', () => {

    let user
    let messages

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.locked

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })

    it('Deve exibir mensagem de conta bloqueada', () => {

        LoginPage.visit()

        LoginPage.login(
            Cypress.env(user.email),
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.lockedAccount
        )


    })

})