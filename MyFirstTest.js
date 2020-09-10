describe('MyFirstTestSuite',function()
{
    it('MyFirstTestCase',function()
    {
        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file')
        cy.title().should('eq','Writing Your First Test | Cypress Documentation')
    })
    it('MyFirstTestCase',function()
    {
        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file')
        cy.title().should('eq','Writing Your First Test  Cypress Documentation')
    })
})