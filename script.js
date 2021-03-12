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
function creatSnake(){
    for(let i=0; i <snake.length;i++){
        context.fillStyle = "green"
        // fillRect tem 4 parametros
        context.fillRect(snake[i].x, snake[i].y, box, box)

    }
}
creatBG();
creatSnake();

