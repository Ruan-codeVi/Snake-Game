let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
// Criando a var da comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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
// função que desenha a comida no canvas
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
// Criando um EventListener 
document.addEventListener("keydown", update)
// função que recebe as teclas, processa e seta as direções do teclado
function update(event){
    if(event.keyCode == 37 && direction !="right") direction= "left";
    if(event.keyCode == 38 && direction !="down") direction="up";
    if(event.keyCode == 39 && direction !="left") direction="right";
    if(event.keyCode == 40 && direction !="up") direction="down"
}
function playGame(){
    // movimentação através das paredes
    if(snake[0].x > 19 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 20 * box;
    if(snake[0].y > 19 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 20 * box;
    creatBG();
    creatSnake();
    drawFood();
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

    // criando a cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(playGame, 100)
