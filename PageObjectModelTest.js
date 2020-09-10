/// <reference types="Cypress" />

import LoginPage from '../PageObjectModel/PageObjectModels'

describe('PageObjectModel',function()
{
    it('PageObjectModelTest',function()
    {
        const lp=new LoginPage()
        lp.visit()
        lp.Email('admin@yourstore.com')
        lp.Password('admin')
        lp.Submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})