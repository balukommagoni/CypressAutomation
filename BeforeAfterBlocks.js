/// <reference types = "Cypress"/>

describe('BeforeAfterTestBlocks',function()
{
    before(function()
    {
        cy.log('******** This is a SETUP block *******')
    })
    beforeEach(function()
    {
        cy.log('******** This is a LOGIN block *******')
    })
    afterEach(function()
    {
        cy.log('******** This is a LOGOUT block *******')
    })
    after(function()
    {
        cy.log('******** This is a TEAR DOWN block *******')
    })
    it('SearchTest',function()
    {
        cy.log("******* This a Search block ********")
    })
    
    it('AdvancedSearchTest',function()
    {
        cy.log("******* This a Advance Search block ********")
    })
    
    it('ListingProductsTest',function()
    {
        cy.log("******* This a Listing Products block ********")
    })
})