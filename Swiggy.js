/// <reference types="Cypress"/>

describe('swiggy',function()
{
    it('swiggyTest',function()
    {
        cy.visit('https://www.swiggy.com/restaurants') //visit page
        cy.get('#location').click().type('Hyderabad') //location
        cy.get('[tabindex="2"] > ._2W-T9').click()//select location
        cy.get(':nth-child(5) > ._2CgXb > ._1T-E4 > :nth-child(2)').click()//search
        cy.get('._2BJMh').click().type('paradise') //xpath-input[@class="_2BJMh"]
        cy.get(':nth-child(1) > ._720-1 > :nth-child(1) > .NJWoG').click()//xpath-//div[@class="_3Ztcd"]//div[contains(text(),'Paradise Biryani')]
        cy.get(':nth-child(1) > ._2yTju > .MZy1T > div._3XX_A > ._1j_Yo > ._1HEuF > ._3FR5S > ._3Ztcd > .nA6kb').click()//div[@class="nA6kb"][contains(text(),"Paradise Biryani")]
        cy.get('#h-1950595611 > :nth-child(3) > :nth-child(1) > :nth-child(1) > .styles_item__Hw5Oy > .styles_itemImageContainer__3_3Ig > .styles_itemAddButton__20ACm > .F8dpS > ._1RPOp').click()
        cy.get('._1gPB7').click({force:true})
        cy.get('._3ZAW1').each((value) => //div[@class="_3ZAW1"]
        {
            const text=value.text()
            expect(text).to.equal("606")
        })
    })
})