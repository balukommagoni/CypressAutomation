describe('ShoppingCartAutomation',function()
{
    it('CheckAddedValue',function()
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get(".search-box-text").type('Apple MacBook Pro 13-inch')
        cy.get('[type=submit]').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#add-to-cart-button-4').click()
        cy.get('.cart-label').click()
        cy.get('.product-subtotal').contains('$3,600.00')
    })
})