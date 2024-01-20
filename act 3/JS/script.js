const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');




button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')) || 0;




    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake'); // Add the shake class to the bell
    button.classList.add('active');
})




bell.addEventListener('animationend', () => {
    bell.classList.remove('shake'); // Remove the shake class when the animation ends
})




notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
})
