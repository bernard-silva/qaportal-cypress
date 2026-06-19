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

    clickForgotPassword() {

        cy.contains('button', 'Forgot password?')
            .click()

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

    loginWithEnter(email, password) {

        this.fillEmail(email)

        cy.get(this.selectors.password)
            .clear()
            .type(`${password}{enter}`)

    }

    validateErrorMessage(message) {
        cy.contains(message)
            .should('be.visible')
    }

}

export default new LoginPage()