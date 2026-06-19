class ForgotPasswordPage {

    selectors = {

        title: 'h2',
        email: 'input[type="email"]'

    }

    validateResetPasswordPage() {

        cy.get(this.selectors.title)
            .should('be.visible')
            .and('contain.text', 'Reset password')

    }

    fillEmailAndPressEnter(email) {

        cy.get(this.selectors.email)
            .clear()
            .type(`${email}{enter}`)

    }

    validateSuccessMessage(message) {

        cy.contains(message)
            .should('be.visible')

    }

}

export default new ForgotPasswordPage()