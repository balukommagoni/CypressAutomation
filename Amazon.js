describe('Amazon',function()
{
    it('AmazonTest',function()
    {
        cy.visit('https://www.amazon.in/')
        cy.get('[id="nav-link-accountList"]').click() //xpath-//div[@class="nav-line-1-container"]//span[@class="nav-line-1"][text()="Hello, Balu"]
        cy.get('[class="a-input-text a-span12 auth-autofocus auth-required-field"]').click().type('7382092320')//xpath-//input [@type="email"]
        cy.get('.a-button-input').click()
        cy.get('[id="ap_password"]').click().type('nokia201asha')//xpath-//input [@type="password"]
        cy.get('input[id="signInSubmit"]').click()
        cy.get('.hud-profile-categories-container-1 > .a-link-normal').click()//xpath-//p[contains(text(),'Mobiles and Accessories')]
        cy.get('img[alt="CP_Latest_OnePlus8Series"]').click()//xpath-//img[@alt="CP_Latest_OnePlus8Series"]
        cy.get('[src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/June/12th/8/2_ShopNow.jpg"]').click()//xpath-//img[@alt="6GB"]
        cy.get('input[id="mbb-offeringID-1"]').click()//xpath-//input[@name="offeringID.1"]
        cy.get('input[id="mbb-offeringID-2"]').click()//xpath-//input[@name="offeringID.2"]
        cy.get('input[id="mbb-offeringID-3"]').click()//xpath-//input[@name="offeringID.3"]
        cy.get('[id="priceblock_ourprice"]').each((value) => //xpath-//span[@id="priceblock_ourprice"]
        {
            const text=value.text()
            expect(text).to.equal("₹ 41,999.00")
        })
    })
})