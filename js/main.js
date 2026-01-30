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