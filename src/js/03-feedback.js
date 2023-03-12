import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

// ----------------ой, так теж можна звертатится до полів вводу :)
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

// -- const лайфхак = "Магія від Репети";
const STORAGE_KEY = 'feedback-form-state';

// Зберігаємо поточне значення полів форми в localStorage
function saveFormToLocalStorage () {
    // -- створюємо об'єкт з полями пошти та повідомлення і обрізаємо зайве
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  // -- записуємо у схочище значення ключа та приведені до стрічки значення полів
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Слухаємо подію input на формі та встановлюємо інтервал прослухоування
feedbackForm.addEventListener('input', throttle(saveFormToLocalStorage, 500));

// При завантаженні сторінки перевіряємо сховище на наявність в ньому даних та заповнюємо поля форми
const formDataJSON = localStorage.getItem(STORAGE_KEY); 
if (formDataJSON) {
  // -- парсимо дані зі сховища за наявності
  const formData = JSON.parse(formDataJSON); 
  //-- вставляємо валідні дані в форми
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// -- Дуже уважно слухаємо як натискають на кнопку
feedbackForm.addEventListener('submit', (evt) => { 
    evt.preventDefault(); // тут взагалі щось страшне коїться
    // -- формуємо об'єкт для консолі
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData); // -- та да-а-а-ам!!! :)
    localStorage.removeItem(STORAGE_KEY); // прибрали після себе і протерли
    emailInput.value = '';
    messageInput.value = '';
  });
  