const throttle = require('lodash.throttle');

// import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);
// console.log(form);
console.log(form);
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = `feedback-form-state`;
form.addEventListener(`submit`, submitForm);
form.addEventListener('input', throttle(validateForm, 500));
const data = {};
function validateForm(event) {
  event.preventDefault();
  const data = new FormData(form);

  const formDataObj = Object.fromEntries(data.entries());

  const stringifiedData = JSON.stringify(formDataObj);
  console.log(stringifiedData);
  localStorage.setItem(STORAGE_KEY, formDataObj);

  // const receivedData = localStorage.getItem(STORAGE_KEY);
  // if (receivedData) {
  //   const parcedData = JSON.parse(receivedData);
  //   console.log(parcedData);
  // }
}
function submitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(data);
}
function getDataBase() {
  const getData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(getData);
  if (parsedData) {
    // emailRef.value = parsedData.email;
    // messageRef.value = parsedData.message;
    console.log(parsedData);
  }
}
