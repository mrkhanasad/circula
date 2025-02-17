import { expect } from "@playwright/test";
import { selectors } from "../selectors";
import { generateRandomEmail, generateRandomFirstName, generateRandomLastName, generateRandomGermanPhoneNumber, generateRandomCompanyName } from '../Util/randomDataGen';

export async function signUp(page, country) {
    const email = generateRandomEmail();
    const firstName = generateRandomFirstName();
    const lastName = generateRandomLastName();
    const phoneNumber = generateRandomGermanPhoneNumber();
    const companyName = generateRandomCompanyName();

    await page.goto('https://circula-qa-challenge.vercel.app/users/sign_up');
    await page.click(selectors.acceptCookies);
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', 'RandomPass1');
    await page.click(selectors.termsAndConditionsCheckbox, { position: { x: 0, y: 0 } }); 
    await page.click(selectors.submitOption("Try for free"));
    await page.fill(selectors.signUpFirstNameInput,firstName)
    await page.fill(selectors.signUpLastNameInput,lastName)
    await page.fill(selectors.signUpPhoneInput,phoneNumber)
    await page.click(selectors.submitOption('Next step'));
    await page.fill(selectors.companyNameInput, companyName)
    await page.click(selectors.countrySelection)
    await page.click(selectors.countryOption(country));
    await page.click(selectors.hdyhau)
    await page.click('[role="menuitemradio"]:has-text("DATEV")');
    await page.click(selectors.submitOption('Create an account'));
    await expect(page.getByTestId('signup-success')).toContainText("Great!");

    return email;
  }