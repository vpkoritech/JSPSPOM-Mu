const {expect} = require('@playwright/test');

class HomePage{

    constructor(page){
        this.page=page;
        this.menu="//img[@alt='menu']"
        this.logoutoption="//button[normalize-space()='Sign out']"
        this.header = "//h2[normalize-space()='Sign In']"
        this.manage=".cartBtn"
    }

    async verifyManageOption(){
        await expect (this.page.locator(this.manage)).toBeVisible();
    }
    async logoutFromApp(){
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
        //await this.page.screenShot({path:"./screenshots/${Date.now()}.png"})   
    }

    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }
}

module.exports=HomePage;