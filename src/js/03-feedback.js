import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const data = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

onPageReload();

function onFormInput() {
  data.email = email.value;
  data.message = message.value;

  const stringifiedData = JSON.stringify(data);

  console.log(stringifiedData);

  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function onFormSubmit(event) {
  event.preventDefault();

  event.target.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onPageReload() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    email.value = parsedData.email;
    message.value = parsedData.message;
    console.log(parsedData);
  }
}
