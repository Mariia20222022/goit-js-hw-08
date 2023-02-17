import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// console.log(form);
console.log(form);
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = `feedback-form-state`;

form.addEventListener('submit', throttle(validateForm), 500);

function validateForm() {
  const formDataObj = Object.fromEntries(myFormData.entries());
  console.log(formDataObj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataObj));
}
function validateForm(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  // const formDataObj = Object.fromEntries(myFormData.entries());
  // console.log(formDataObj);
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataObj));
  event.currentTarget.reset();
  // const data = localStorage.getItem(STORAGE_KEY);
  // const parsedData = JSON.parse(data);
  // if (parsedData) {
  //   console.log(parsedData);
  // }
}
function getForm(event) {
  const data = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(data);
  if (parsedData) {
    console.log(parsedData);
  }
}
