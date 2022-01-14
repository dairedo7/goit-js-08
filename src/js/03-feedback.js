var throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
//Checking the existing localeStorage for form's elements data
const savedData = localStorage.getItem(STORAGE_KEY);
const savedDataParsed = JSON.parse(savedData);
console.log(savedDataParsed);

if (savedDataParsed) {
    form['email'].value = savedDataParsed.email;
    form['message'].value = savedDataParsed.message;
}
//Checking for input activity and setting localeStorage for formData object, which contains form's elements values
form.addEventListener('input', throttle(onInput, 500)); //update localStorage every 500ms

function onInput() {
    const formData = { email: `${form["email"].value}`, message: `${form["message"].value}` };
    const formDataSaved = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, formDataSaved);
}

form.addEventListener('submit', onSubmit);
//Cleaning localStorage and form fields on submit and returning object keys and values
function onSubmit(evt) {
    evt.preventDefault();
    const formData = { email: `${form['email'].value}`, message: `${form['message'].value}` };
    console.log(formData);

    if (formData.email === '' || formData.message === '') {
        return alert("Please, fill in all the fields!");
    }

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}