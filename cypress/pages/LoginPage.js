class LoginPage {

    selectors = {

        email: '#email',
        password: '#password',
        rememberMe: '#remember',
        signInButton: 'button[type="button"]',
        errorMessage: '.error-message'

    }

    visit() {
        cy.visit('/')
    }

    fillEmail(email) {
        cy.get(this.selectors.email)
            .clear()
            .type(email)
    }

    fillPassword(password) {
        cy.get(this.selectors.password)
            .clear()
            .type(password)
    }

    // getSignInButton() {
    //     return cy.contains(
    //         'button[type="button"]',
    //         'Sign In'
    //     )
    // }

    clickSignIn() {
        cy.contains(
            this.selectors.signInButton,
            /^Sign In$/
        ).click()
    }

    login(email, password) {

        this.fillEmail(email)
        this.fillPassword(password)
        this.clickSignIn()

    }

    validateErrorMessage(message) {
        cy.contains(message)
            .should('be.visible')
    }

}

export default new LoginPage()