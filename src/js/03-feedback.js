import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// console.log(form);
console.log(form);
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = `feedback-form-state`;

form.addEventListener(`input`, thtottle(validateForm), 500);
function validateForm(e) {
  console.log(form.querySelector('input[name="email"]'));
  console.log(form.querySelector('input[name="message"]'));
  const formData = new FormData(form);

  const obj = {
    email: formData.get('email'),
    message: formData.get('message'),
  };
  console.log(obj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}
form.addEventListener(`submit`, e => {
  e.preventDefault();
  e.currentTarget.reset();
});
function getData() {
  const data = localStorage.getItem(STORAGE_KEY);

  const parsedData = JSON.parse(data);

  if (parsedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}
