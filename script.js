document.getElementById('changeColorBtn').addEventListener('click', function() {
    changeColors();
});

function changeColors() {
    var newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.querySelectorAll('.resume-container, h1, h2, h3, p, ul li, .button').forEach(function(element) {
        element.style.color = newColor;
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
