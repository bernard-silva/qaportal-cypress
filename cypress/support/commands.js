Cypress.Commands.add(
    'loginAsAdmin',
    () => {

        cy.fixture('users')
            .then((users) => {

                cy.get('#email')
                    .type(Cypress.env(users.admin.email))

                cy.get('#password')
                    .type(Cypress.env(users.admin.password))

                cy.get('button[type="submit"]')
                    .click()

            })

    }
)