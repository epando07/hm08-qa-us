
Urban Routes Automated Tests
-This project contains automated tests for Urban Routes, covering the full process of ordering a taxi.

Purpose
- The purpose of this project is to ensure the functionality of Urban Routes by creating automated tests for various scenarios related to ordering a taxi.

Writing Tests
All test scripts are located in the test/specs folder. The main test script for ordering a taxi is createAnOrder.e2e.js. This script covers the following scenarios:

Test Scenarios
Wait for Taxi Driver:
input an address and wait for the taxi driver.

Select Supportive Plan:
select the supportive plan.

Input Phone Number:
input a phone number, and verify its existence.

Adding a Payment Card:
add a payment card, ensuring the card payment method icon exists.

Leave a Message for the Driver:
click on the message field, set a message, and verify the entered message.

Ordering a Blanket and Handkerchiefs:
click on order requirements, and add a blanket and handkerchiefs.

Ordering 2 Ice Creams:
add ice cream to the order, and verify the quantity.

Car Search Modal Appears:
click on the place order button, and verify the appearance of the car search modal.

How to run the project:
To run test you'll be using the command - npm run wdio
