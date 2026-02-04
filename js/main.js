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

/* slider */
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const sliderLine = document.querySelector('.blocks-slaider')
let offset = 0;

btnNext.addEventListener('click', () => {
    offset += 550;
    if (offset > 2000)
        offset = 0;
    sliderLine.style.left = -offset + 'px';
});

btnPrev.addEventListener('click', () => {
    offset -= 550;
    if (offset < 0)
        offset = 1700;
    sliderLine.style.left = -offset + 'px';
})

