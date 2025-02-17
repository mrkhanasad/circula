import { faker } from '@faker-js/faker';

export function generateRandomEmail() {
  return faker.internet.exampleEmail({ domain: 'workemail.com'});
}

export function generateRandomFirstName() {
  return faker.name.firstName();
}

export function generateRandomLastName() {
  return faker.name.lastName();
}

export function generateRandomGermanPhoneNumber() {
  return faker.phone.number('+49 15#########');
}

export function generateRandomCompanyName() {
  return faker.company.name();
}