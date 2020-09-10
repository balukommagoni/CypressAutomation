/// <reference types="Cypress"/>

describe("Flipkart",function()
{
    it("FlipkartTest1",function()
    {
        cy.visit("https://www.flipkart.com/") //Visit page
        cy.get("a[class=_3Ep39l]").click() //login
        cy.get(":nth-child(1) > ._2zrpKA").click().type("7382092320") //enter mobile no
        cy.get(':nth-child(2) > ._2zrpKA').click().type("nokia201asha").log(false) //enter password no
        cy.get('._1avdGP > ._2AkmmA').click() //Login click
        cy.wait(1600)
        cy.get(".LM6RPg").click().type('T shirts men').click() //search
        cy.get('.vh79eN > svg').click() //search
        cy.wait(1600)
        cy.get(':nth-child(3) > .dHGf8H > ._34Yjv1').trigger('mouseover')
        cy.wait(2000)
        cy.get('[class="_1Q5BxB"]').contains('Wishlist').click()
        //cy.get(':nth-child(6) > ._3rAVLS > ._5MNM30 > .col-10-12 > .TLVGit').click()
    })
    it("FlipkartTest2",function()
    {
        cy.visit('https://www.flipkart.com/fastcolors-color-block-men-polo-neck-red-blue-yellow-t-shirt/p/itm6eacef70dc89b?pid=TSHFSQMFK6QEMXZX&otracker=wishlist&lid=LSTTSHFSQMFK6QEMXZXSVDSMO&iid=07a39981-9e79-4596-b93e-fc19272c9fc0.TSHFSQMFK6QEMXZX.PRODUCTSUMMARY&ssid=ha6m48pvb40000001593038676159')
        cy.wait(1600)
        cy.get("a[class=_3Ep39l]").click() //login
        cy.get(":nth-child(1) > ._2zrpKA").click().type("7382092320") //enter mobile no
        cy.get(':nth-child(2) > ._2zrpKA').click().type("nokia201asha").log(false) //enter password no
        cy.get('._1avdGP > ._2AkmmA').click() //Login click
        cy.wait(1600)
        cy.get('._1k1QCg > .row > :nth-child(1) > ._2AkmmA').click()
    })
})
