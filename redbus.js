/// <reference types="Cypress"/>

describe('redbus',function()
{
    it('redbusTest',function()
    {
        cy.visit('https://www.redbus.in/') 
        //visit page
        cy.get('#src').type('Hyderabad')
        //from
        cy.get('[class="selected"]').click()
        //select from
        cy.get('#dest').type('Banglore')
        //to
        cy.get('[class="selected"]').click()
        //select to
        cy.get('.text-trans-uc').click()
        //select
        cy.get('[class="current day"]').click()
        //day
        cy.get('#search_btn').click()
        //select all
        cy.get(':nth-child(4) > :nth-child(1) > .custom-checkbox').click()
        //checkbox
        cy.get('.button').click()
        //view tickets
        cy.get(':nth-child(8) > input').click()
        //boarding point
        cy.get('[data-value="Ameerpet"] > .custom-checkbox').click()
        //select address
        cy.get('.btn-apply').click()
        //select click button
        cy.get(':nth-child(11) > input').click()
        //drop point
        cy.get('[data-value="Hebbal"] > .custom-checkbox').click()
        //drop address select
        cy.get('.btn-apply').click()
        //select click button
        cy.get('canvas[class="pointer"]').click()
    }
    )
})