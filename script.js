let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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
function playGame(){
    creatBG();
    creatSnake();
    // Eixos
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // Direções
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //retirando uma box(Quadrado)
    snake.pop();

    // adicionado box a cabeça
    let newHead ={
        x:snakeX,
        y: snakeY
    }
}
let game = setInterval(playGame, 100)
