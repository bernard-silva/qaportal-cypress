class DashboardPage {

    selectors = {

        dashboardTitle: 'h1',
        logoutButton: '[data-testid="logout"]'

    }

    validateDashboardLoaded() {

        cy.get(this.selectors.dashboardTitle)
            .should('be.visible')

    }

    logout() {

        cy.get(this.selectors.logoutButton)
            .click()

    }

}

export default new DashboardPage()