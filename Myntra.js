/// <reference types="Cypress"/>

describe('Myntra',function()
{
    it('MyntraTest',function()
    {
        cy.visit('https://www.myntra.com/') //visit page
        cy.get('.desktop-searchBar').click().type('T shirts for men') //search 
        cy.get('.desktop-group > [data-index="1"]').click() //select search item
        cy.get('.results-base > :nth-child(1) > a').click() //select t-shirt
        cy.get('.pdp-add-to-wishlist').click()
    })
})