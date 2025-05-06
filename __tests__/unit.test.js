// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number - true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number - true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number - false', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});
test('invalid phone number - false', () => {
  expect(isPhoneNumber('phone123')).toBe(false);
});

test('valid email - true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email - true', () => {
  expect(isEmail('firstname_surname@example.co')).toBe(true);
});
test('valid email - false', () => {
  expect(isEmail('random-email')).toBe(false);
});
test('valid email - false', () => {
  expect(isEmail('random@.com')).toBe(false);
});

test('strong password - true', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});
test('strong password - true', () => {
  expect(isStrongPassword('good_Pw1')).toBe(true);
});
test('weak password - false', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('weak password - false', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('valid date - true', () => {
  expect(isDate('31/11/2020')).toBe(true);
});
test('valid date - true', () => {
  expect(isDate('1/1/1999')).toBe(true);
});
test('invalid date - false', () => {
  expect(isDate('1990/01/01')).toBe(false);
});
test('invalid date - false', () => {
  expect(isDate('01-01.2025')).toBe(false);
});

test('valid hex color - true', () => {
  expect(isHexColor('#ABC')).toBe(true);
});
test('valid hex color - true', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});
test('invalid hex color - false', () => {
  expect(isHexColor('12345')).toBe(false);
});
test('invalid hex color - false', () => {
  expect(isHexColor('#12345')).toBe(false);
});