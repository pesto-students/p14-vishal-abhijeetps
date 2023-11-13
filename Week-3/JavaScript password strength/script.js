// Your solution goes here
const is8Char = (password) => password.length >= 8;

const has1UpperCase = (password) => /[A-Z]/.test(password);

const isPasswordString = (password) => password.includes('password');

const isStrongPassword = (password) =>
  is8Char(password) && has1UpperCase(password) && !isPasswordString(password);
