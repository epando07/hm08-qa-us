const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    

    it('should wait for taxi driver', async () => {
        // Call the taxi to the address
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
        
    });
    

        // Select supportive plan
    it('should select supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();

        const supportivePlanButtonActive = await $(page.supportivePlanButtonActive);
        await supportivePlanButtonActive.waitForDisplayed();
        await expect (supportivePlanButtonActive).toBeExisting();
    });
        
        
        // Input phone number
    it('should input phone number', async () => { 
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1"); 
        await page.submitPhoneNumber(phoneNumber); 
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });
    
        // Adding a payment card
    it('should add a payment card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();

    });
    

        // Leaving a message for the driver
    it('should leave a message for the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageToTheDriverButton = await $(page.messageToTheDriverButton);
        await messageToTheDriverButton.waitForDisplayed();
        await messageToTheDriverButton.click();
        await messageToTheDriverField.setValue('Get some whiskey');
        await expect($(page.messageToTheDriverField)).toHaveValue();
    });
    


        // Ordering a blanket and handkerchiefs
    it('should add a blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderRequirementsButton = await $(page.orderRequirementsButton);
        await orderRequirementsButton.waitForDisplayed();
        await orderRequirementsButton.click();

        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed();
        await blanketAndHandkerchiefsButton.click();
        await expect (blanketAndHandkerchiefsButton).toBeExisting();
    });
    

        // Ordering 2 ice creams
    it('should add ice cream to the order', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const iceCreamButton = await $(page.iceCreamButton);
        await iceCreamButton.waitForDisplayed();
        
        const iceCreamCounterPlusButton = await $(page.iceCreamCounterPlusButton);
        await iceCreamCounterPlusButton.waitForDisplayed();
        await iceCreamCounterPlusButton.click();
        await iceCreamCounterPlusButton.click();
        await iceCreamCounterPlusButton.setValue(2);
        await expect($(iceCreamCounterPlusButton)).toHaveValue(2);
    });
    

        // The car search modal appears
    it('should pop up car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const placeOrderButton = await $(page.placeOrderButton);
        await placeOrderButton.waitForDisplayed();
        await placeOrderButton.click();
        await expect($(page.carSearchModal)).toBeExisting();
    });
});
