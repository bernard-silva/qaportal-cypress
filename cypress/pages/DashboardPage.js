class DashboardPage {

    selectors = {

        dashboardTitle: 'h1'

    }

    elements = {

        dashboardTitle: () => cy.contains('Welcome back'),

    }

    validateDashboardLoaded() {

        cy.get(this.selectors.dashboardTitle)
            .should('be.visible')

    }

    getLogoutButton() {
        return cy.contains('button', 'Log out')
    }

    waitDashboardLoaded() {
        this.elements.dashboardTitle()
            .should('be.visible')
    }

    logout() {

        this.waitDashboardLoaded()

        cy.wait(2000)

        this.getLogoutButton().click()

    }
}

export default new DashboardPage()