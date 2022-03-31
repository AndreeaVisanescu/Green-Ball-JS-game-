const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let downPresses = false;
let upPresses = false;
let leftPresses = false;
let rightPresses = false;


//Game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    inputs();
    boundryCheck();
    clearScreen();
    drawGreenBlob();
}

function boundryCheck() {
    //up
    if (y < radius) {
        y = radius;
    }
    //down
    if (y > canvas.height-radius) {
        y = canvas.height-radius;
    }
    //left
    if (x < radius) {
        x = radius;
    }
    //right
    if (x > canvas.width-radius) {
        x = canvas.width-radius;
    }
}

function inputs(){
    if(downPresses) {
        y = y + speed;
    }
    if(upPresses) {
        y = y - speed;
    }
    if(leftPresses) {
        x = x - speed;
    }
    if(rightPresses) {
        x = x + speed;
    }
}

function drawGreenBlob() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(x,y,radius, 0,Math.PI * 2);
    ctx.fill();
}

 
function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth, canvas.height);
}

document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);

function keydown(event) {
    if (event.keyCode == 40) {
        downPresses = true;
    }
    if (event.keyCode == 38) {
        upPresses = true;
    }
    if (event.keyCode == 37) {
        leftPresses = true;
    }
    if (event.keyCode == 39) {
        rightPresses = true;
    }
}
function keyup(event) {
    if (event.keyCode == 40) {
        downPresses = false;
    }
    if (event.keyCode == 38) {
        upPresses = false;
    }
    if (event.keyCode == 37) {
        leftPresses = false;
    }
    if (event.keyCode == 39) {
        rightPresses = false;
    }
}



drawGame();