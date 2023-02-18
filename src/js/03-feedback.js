import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// console.log(form);
console.log(form);
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = `feedback-form-state`;

form.addEventListener('submit', throttle(validateForm), 500);

function validateForm(event) {
  event.preventDefault();
  const data = new FormData(form);

  const formDataObj = Object.fromEntries(myFormData.entries());
  console.log(formDataObj);
}
