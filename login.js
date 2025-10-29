class Loginpage{
    constructor(page){
    this. page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput =page.locator('#passowrd');
    this.loginbtn = page.locator('button[type ="submit"]');
}
async login(username,password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginbtn.click();
}
}
Module.exports = {Loginpage};

const{test,expect} =require('@playwright/test');
const { LoginPage } = require('../login.page');
test.login('valid login test', async ({page}) =>{
    const loginpage = new loginpage(page);
    await page.goto ('https://practicetestautomation.com/practice-test-login/?utm_source=chatgpt.com')
    await loginPage.login('student', 'Password123');
    
    await expect(page.locator('text = Logged In Successfully'))/tobevisible();
})
