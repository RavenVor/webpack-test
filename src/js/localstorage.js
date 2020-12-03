// localStorage.setItem('test', 'localstorage test');

// const settings = {
//   theme: 'darck',
//   fontSize: 14,
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const value = localStorage.getItem('test');
// console.log(value);

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings.fontSize);
// localStorage.removeItem('settings');

const refs = {
  form: document.querySelector('.feedback__form'),
  textarea: document.querySelector('textarea.feedback__form-message'),
};

populateMessage();

refs.form.addEventListener('submit', hendelForm);
refs.textarea.addEventListener('input', hendleTextareaInput);

function hendelForm(e) {
  e.preventDefault();

  console.log('Відправляємо форму на бекед');

  e.currentTarget.reset();
  localStorage.removeItem('feedback-message');
}

function hendleTextareaInput(e) {
  const message = e.currentTarget.value;

  localStorage.setItem('feedback-message', message);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('feedback-message');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
