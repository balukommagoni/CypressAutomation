
describe('Fixtures',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
    {
        this.data=data
    })
    })
    
    it('FixturesTest',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').type(this.data.email)//input[@value="admin@yourstore.com"]
        cy.get('#Password').type(this.data.password)//input[@id="Password"]
        cy.get('.button-1').click()//input[@type="submit"]
    })
})