import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Log Out com sucesso', () => {

    let user

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.admin

            })

    })

    it('Deve deslogar com sucesso', () => {

        LoginPage.visit()

        LoginPage.login(
            Cypress.env(user.email),
            Cypress.env(user.password)
        )

        DashboardPage.validateDashboardLoaded()

        DashboardPage.logout()

    })

})