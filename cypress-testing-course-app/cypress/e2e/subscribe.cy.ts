describe('Newsletter Subscribe', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('allows users to subscribe to the email list', () => {
        //cy.get('[data-test="email-input"]')
        cy.getByDataTest('email-input').type('pella@svanlos.nu')
        cy.getByDataTest('submit-button').click
        cy.getByDataTest('success-message').should('exist').contains('pella@svanslos.nu')
    })
})