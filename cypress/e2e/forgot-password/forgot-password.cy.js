import LoginPage from '../../pages/LoginPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'

describe('Reset de senha', () => {

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

    it('Deve acessar a tela de Reset Password e exibir mensagem de envio de email com instruções ao pressionar Enter', () => {

        LoginPage.visit()

        LoginPage.clickForgotPassword()

        ForgotPasswordPage.validateResetPasswordPage()

        ForgotPasswordPage.fillEmailAndPressEnter(user.email)

        ForgotPasswordPage.validateSuccessMessage(
            messages.resetPassword
        )

    })

})