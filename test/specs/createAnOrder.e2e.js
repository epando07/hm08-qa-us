const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    /* it('should open phone number modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForExist({ timeout: 20000 }); // Wait for the element to exist
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
 
        
    }); */

    it('should wait for taxi driver', async () => {
        // Call the taxi to the address
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    });

        // Select supportive plan
    describe('Selecting supportive plan', () => {
        it('should select supportive plan', async () => {
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    });
        
        
        // Input phone number
    describe('Input phone number', () => {
        it('should input phone number', async () => {
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });
        

        // Adding a payment card
    describe('Add payment card', () => {
        it('should add a payment card', async () => {
        await page.addPaymentMethodCard();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    });

        // Leaving a message for the driver
    describe('Leaving a message for the driver', () => {
        it('should leave a message for the driver', async () => {
        const messageToTheDriverField = await $(page.messageToTheDriverField);
        await messageToTheDriverField.waitForDisplayed();
        await messageToTheDriverField.click();
        await messageToTheDriverField.setValue('Get some whiskey');
        await expect($(page.messageToTheDriver)).toHaveValue("Get some whiskey");
    });


        // Ordering a blanket and handkerchiefs
    describe('Ordering a blanket and handkerchiefs', () => {
        it('should add a blanket and handkerchiefs', async () => {
        const orderRequirementsButton = await $(page.orderRequirementsButton);
        await orderRequirementsButton.waitForDisplayed();
        await orderRequirementsButton.click();

        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed();
        await blanketAndHandkerchiefsButton.click();
    }):

        // Ordering 2 ice creams
    describe('Ordering ice cream', () => {
        it('should add ice cream to the order', async () => {
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
    describe('car search modal appears', () => {
        it('should pop up car search modal', async () => {
        const placeOrderButton = await $(page.placeOrderButton);
        await placeOrderButton.waitForDisplayed();
        await placeOrderButton.click();
    });
});
