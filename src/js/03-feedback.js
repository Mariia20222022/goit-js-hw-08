import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// console.log(form);
console.log(form);
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = `feedback-form-state`;
