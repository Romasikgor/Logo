// email

const btn = document.querySelector(".btnclick");
const error = document.querySelector("#error");
const email = document.querySelector('#inputEmail');

btn.addEventListener('click', () => {

    if (!email.value.includes('@')) {
        error.textContent = 'Немає символа "@"';
        return;
    }
    else if (!email.value.includes('.')) {
        error.textContent = 'Немає символа "."';
        return;
    }
    else {
        error.textContent = "Відправлено!";
        error.style.color = '#FA9021';
        email.value = '';
    }

    setTimeout(() => {
        error.textContent = "";
        error.style.color = 'red';
    }, 2500)
})

/* form-contacts */

const formBtn = document.querySelector('.form-btn');
const formFirstName = document.querySelector('#form-first-name');
const formLastName = document.querySelector('#form-last-name');
const formEmail = document.querySelector('#form-email');
const message = document.querySelector('#message');
const formSpan = document.querySelectorAll('.form-span');
const formError = document.querySelector("#form-error");

formBtn.addEventListener('click', () => {
    if (formFirstName.value.length <= 0 || formLastName.value.length <= 0 || formEmail.value.length <= 0 || message.value.length <= 0) {
        formSpan.forEach((span) => {
            span.style.color = 'red';
        })
        return;
    }
    else if (!formEmail.value.includes('@') || !formEmail.value.includes('.')) {
        formError.textContent = 'Невірно прописаний Email';

        formSpan.forEach((span) => {
            span.style.color = '#4f4f4f';
        })

        return;
    }
    else if (message.value.length < 30 || message.value.length > 500) {
        formError.textContent = 'Повідомлення завелике або замаленьке';

        formSpan.forEach((span) => {
            span.style.color = '#4f4f4f';
        })

        return;
    }
    else {
        formError.style.color = 'yellow';
        formError.textContent = 'Відправлено!';
        message.value = '';

        formSpan.forEach((span) => {
            span.style.color = '#4f4f4f';
        })

        setTimeout(() => {
            formError.style.color = 'red';
            formError.textContent = '';
        }, 5000)
    }
}) 