/// <reference types="Cypress"/>

describe('Alert',function(){
    it('Alerttest',function(){
        cy.visit('https://testautomationpractise.blogspot.com/')
        cy.get('').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a button')
        }
        )
    })
})