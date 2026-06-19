import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Tentativa de login com Internal Server Error', () => {

    let user
    let messages

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.error

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })

    it('Deve exibir mensagem de Internal Server Error', () => {

        LoginPage.visit()

        LoginPage.login(
            Cypress.env(user.email),
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.internalServerError
        )


    })

})