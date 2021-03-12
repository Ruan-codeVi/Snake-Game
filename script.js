let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function creatBG(){
    context.fillStyle = "black";
    context.fillRect(0,0, 20 * box, 20 * box)
}
creatBG();

