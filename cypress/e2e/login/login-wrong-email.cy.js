import LoginPage from '../../pages/LoginPage'

describe('Tentativa de login com email errado e senha correta', () => {

    let user
    let admin
    let messages

    before(() => {

        cy.fixture('users')
            .then((wrongUsers) => {

                user = wrongUsers.wrong

            })
            .then((password) => {

                admin = password.admin

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })


    it('Deve exibir mensagem de Email ou Senha Incorretos', () => {

        LoginPage.visit()

        LoginPage.fillEmail(
            Cypress.env(user.email)
        )

        LoginPage.fillPassword(
            Cypress.env(admin.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.emailError
        )

    })

})