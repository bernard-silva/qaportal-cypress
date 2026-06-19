import LoginPage from '../../pages/LoginPage'
import DashboardPage from '../../pages/DashboardPage'

describe('Login com sucesso', () => {

    let user

    before(() => {

        cy.fixture('users')
            .then((users) => {

                user = users.admin

            })

    })

    it('Deve logar com sucesso', () => {

        LoginPage.visit()

        LoginPage.login(
            Cypress.env(user.email),
            Cypress.env(user.password)
        )

        DashboardPage.validateDashboardLoaded()

    })

})