import LoginPage from '../../pages/LoginPage'

describe('Tentativa de login com email correto e senha errada', () => {

    let user
    let admin
    let messages

    before(() => {

        cy.fixture('users')
            .then((users) => {

                admin = users.admin

            })
            .then((password) => {

                user = password.wrong

            })

        cy.fixture('messages').then((data) => {
            messages = data
        })

    })


    it('Deve exibir mensagem de Email ou Senha Incorretos', () => {

        LoginPage.visit()

        LoginPage.fillEmail(
            Cypress.env(admin.email)
        )

        LoginPage.fillPassword(
            Cypress.env(user.password)
        )

        LoginPage.clickSignIn()

        LoginPage.validateErrorMessage(
            messages.emailError
        )

    })

})