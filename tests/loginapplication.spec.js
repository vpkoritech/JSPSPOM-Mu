import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
import {HomePage} from '../pages/homepage'

test('Login to Application using POM', async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage=new LoginPage(page)
    await loginPage.loginToApplication('vpkoritech@gmail.com','Jy0thika')

    const homePage=new HomePage(page)

    await homePage.verifyManageOption();
    await homePage.logoutFromApp();
    await loginPage.verifySignIn();
})