describe('Grofers',function()
{
    it('GrofersTest',function()
    {
        cy.visit('https://www.snapdeal.com/?utm_term=e,snapdeal&gclid=EAIaIQobChMI9JXasefd6wIVw2kqCh3MTwFgEAAYASAAEgLCAfD_BwE&utm_campaign=BrandCat_new&utm_source=earth_brand_new&utm_medium=brand%20term,&utm_content=homepage')
        //open the page 
        cy.get('.accountUserImg > .sd-icon').click()
        //click on the sigin button
        cy.get('a[href="https://www.snapdeal.com/login"]').click()
        //select the login button
        cy.get('input[id="userName"]').click().type('7382092320')
        //select the mobile filed and type the mobile number
    })
})