import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', submitForm);

form.addEventListener('input', throttle(validateForm, 500));
const data = {
  email: '',
  message: '',
};

getDataBase();
function validateForm(e) {
  const { name, value } = e.target;
  data[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
function submitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(data);
}
function getDataBase() {
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  if (parsedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}
