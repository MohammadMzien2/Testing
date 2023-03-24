describe('Home Page', () => {
  it('the h1 contains the correct tex', () => {
    cy.visit('http://localhost:3000')

    cy.get("[data-test='hero-heading']")
      .should('exist')
      .contains('Testing Next.js Applications with Cypress')
  })

  it("the features on the homepage are correct", () => {
    cy.visit('http://localhost:3000')
    cy.get("dt")
    .eq(0)
    .contains("4 courses")
  })
})