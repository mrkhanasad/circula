export const selectors = {
  termsAndConditionsCheckbox: 'label:has-text("I agree")',
  emailInput: '[id="textfield-:Rqikmm:"]',
  passwordInput: '[id="textfield-:R3aikmm:"]',
  consentCheckBox: 'input[name="acceptTos"]',
  submitStep1: 'input[type="submit"]:has-text("Try for free")',
  signUpFirstNameInput: '[id="textfield-:r0:"]',
  signUpLastNameInput: '[id="textfield-:r1:"]',
  signUpPhoneInput: '[id="textfield-:r2:"]',
  submitOption: (buttonName) => `button[type="submit"]:has-text("${buttonName}")`,
  companyNameInput: '[id="textfield-:r3:"]',
  countrySelection: '[id="downshift-:r4:-input"]',
  countryOption: (country) => `li:has-text("${country}")`,
  hdyhau: '[id="menu-button--menu--:r6:"]',
  howItemDatev: 'role="menuitemradio":has-text("DATEV")',
  createAccountSubmit: 'input[type="submit"]:has-text("Create an account")',
  acceptCookies: '[data-testid="uc-accept-all-button"]',
  signUpSuccess: '[data-testid="signup-success"]'
};