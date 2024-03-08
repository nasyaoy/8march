let btn = document.querySelector('#btn');
let greeting = document.querySelector('#greeting');
let phase = document.querySelector('#phase');
let blockPoem = document.querySelector('#blPoem');

btn.addEventListener('click', () => {
    greeting.classList.add('active');
    phase.classList.add('active');
    blockPoem.classList.add('active');
    let noBtn = document.querySelector('#btn');
    noBtn.style.display = 'none';
})