// @ts-check
import { test, expect } from '@playwright/test';
import { signUp } from '../actions/signUp';

test('Signup flow', async ({ page }) => {
  let signUpEmail = await signUp(page, 'Germany');
  console.log(signUpEmail);
});

test('Select Sweden from the country list', async ({ page }) => {
  let signUpEmail = await signUp(page, 'Sweden');
  console.log(signUpEmail);
});

test('Select United States from the country list', async ({ page }) => {
  let signUpEmail = await signUp(page, 'United States');
  console.log(signUpEmail);
});

