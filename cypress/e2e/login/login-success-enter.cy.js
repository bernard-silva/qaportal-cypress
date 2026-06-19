import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Login via Enter', () => {

    beforeEach(function () {

        cy.fixture('users').as('users')

    })

    it('Deve realizar login com sucesso ao pressionar Enter no campo Password', function () {

        LoginPage.visit()

        LoginPage.loginWithEnter(
            Cypress.env(this.users.admin.email),
            Cypress.env(this.users.admin.password)
        )

        DashboardPage.validateDashboardLoaded()

    })

})