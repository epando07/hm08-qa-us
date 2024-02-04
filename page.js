module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',
    messageToTheDriver: '.#comment.input #Get some whiskey',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: 'div*=phone number',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkCardButton: 'button=Link',
    closePaymentMethodModalButton: '.payment-picker .close-button',
    supportivePlanButton: '.tcard-icon',
    messageToTheDriverField: 'div=.input-container',
    orderRequirementsButton: 'div.reqs-header',
    blanketAndHandkerchiefsButton: 'div.r-sw',
    iceCreamButton: 'div=.r-counter-label',
    iceCreamCounterButton: 'div-.counter',
    iceCreamCounterPlusButton: 'div=.counter-plus',
    placeOrderButton: '.smart-button-wrapper',


    // Modals
    PhoneNumberModal: '.modal',
    // Misc
    cardSignatureStrip: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton)
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumber = await $(this.cardnumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);
        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(55);

        const cardSignatureStrip = await $(this.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();

        const cardPaymentMethodIcon = await $(this.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    }
};
