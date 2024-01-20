const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) => {
    letter.addEventListener('mouseenter', () => {
        letter.classList.toggle('active');
    });
});