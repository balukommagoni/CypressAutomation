/// <reference types='Cypress'/>

describe('CheckboxesDropdrowns',function(){
    it("checkboxdropdown",function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get("input[type=checkbox]").check(['Hockey','Cricket'])

        cy.get("#Skills").select('Android').should('have.value','Android')

        cy.get('#msdd').click()
        cy.get(':nth-child(1) > .ui-corner-all').click()
        cy.get(':nth-child(10) > .ui-corner-all').click()

        cy.get("[role=combobox]").click({force:true})
        cy.get('.select2-search__field').click().type("ind")
        cy.get('.select2-search__field').click().type('{enter}')
    })
})