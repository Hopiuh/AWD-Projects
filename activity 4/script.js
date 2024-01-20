const scrollIndicator = document.getElementById('scroll-indicator');
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator() {
    const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercent}%`;
}

window.addEventListener('scroll', updateScrollIndicator);