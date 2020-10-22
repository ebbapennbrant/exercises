let button = document.getElementById('button')
let changeColor = document.getElementById('inputcolor', newBackground)

button.addEventListener('click', newBackground)

function newBackground () {
    let backgroundColor = document.getElementById('inputColor').value;

    document.getElementById('body').style.backgroundColor = backgroundColor

    console.log(backgroundColor)
}