describe('FlightReservationAutomation',function()
{
    it('FlightReserveTest',function()
    {
        cy.visit('http://newtours.demoaut.com/')
        cy.get(':nth-child(2) > [width="112"] > input').should('be.visible').should('be.enabled').type('kommagoni sumi')//input[@type="text"][@name="userName"]
        cy.get(':nth-child(3) > [width="112"] > input').should('be.visible').should('be.enabled').type('nokia201asha@')//input[@type="password"][@name="password"]
        cy.get('div > input').click()//input[@type="image"][@name="login"]

        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()

        cy.get('td > input').should('be.visible').should('be.enabled').click()
    })
})