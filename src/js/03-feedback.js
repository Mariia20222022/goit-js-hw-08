// import throttle from 'lodash.throttle';
// const form = document.querySelector(`.feedback-form`);
// // console.log(form);
// console.log(form);
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// form.addEventListener(`input`, throttle(onInput, 500));
// form.addEventListener('input', throttle(populateTextarea, 500));
// const STORAGE_KEY = `feedback-form-state`;

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   event.currentTarget.reset();
//   // const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   // localStorage.removeItem(STORAGE_KEY);
// });
// function onInput(event) {
//   const fd = new FormData(form);
//   console.log(fd);
//   const obj = Object.fromEntries(fd);
//   console.log(obj);
//   const stringifiedObj = JSON.stringify(obj);
//   localStorage.setItem(STORAGE_KEY, stringifiedObj);
// }

// function populateTextarea() {
//   const getData = localStorage.getItem(STORAGE_KEY);
//   const parsedData = JSON.parse(getData);
//   if (parsedData) {
//     email.value = parsedData.email;
//     message.value = parsedData.message;
//   }

//   console.log(parsedData);
// }
console.log(`hello`);
console.log(`12345`);
