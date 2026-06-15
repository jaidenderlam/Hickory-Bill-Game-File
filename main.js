const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// colllects all images neccesities for the game
/*let HickoryBillImg = create new Image();
HickoryBillImg.src = "Image/HickoryBill.png";

let burglarImg = create new Image();
burglarImg.src = "Image/burglar.png"; */

let bulletImg = document.createElement("img");
bulletImg.src = "Image/bullet.png";

let background = document.createElement("img");
background.src = "Image/background.png";

let cactusImg = document.createElement("img");
cactusImg.src = "Image/cactus.png";

let ropeImg = document.createElement("img");
ropeImg.src = "Image/rope.png";

// reset all game variables
let gameState;
let score;
let HickoryBill;
let cactus;
let rope;
let bullet;
let burglar;
let keyIsPressed;
let bulletIsPressed;
let time;
reset();


function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (gameState == "start"){
        gameinitial();
    } else if (gameState == "readText") {
            readText();
        } else if (gameState == "playing") {
        gameHasStart();
    } else if (gameState == "gameOver"){
        gameOver();
    }
    requestAnimationFrame(draw);
}
draw();

document.addEventListener("keydown",keyDownHandler);
function keyDownHandler(e) {
    if (e.key === "ArrowUp" && keyIsPressed == true){
        HickoryBill.y -= HickoryBill.gravity;
        keyIsPressed = false;
        setTimeout(() => {
            keyIsPressed = true;
        },500);
    } 
    if (e.key === "ArrowRight" && keyIsPressed == true){
        HickoryBill.x += HickoryBill.speed;
        keyIsPressed = false;
        setTimeout(() => {
            keyIsPressed = true;
        },500);
    }
    if (e.key === "ArrowLeft" && keyIsPressed == true){
        HickoryBill.x += HickoryBill.speed;
        keyIsPressed = false;
        setTimeout(() => {
            keyIsPressed = true;
            },500);
    }
    if (e.key === "ArrowDown" && keyIsPressed == true){
        keyIsPressed = false;
        setTimeout(() => {
            keyIsPressed = true;
            },500);
    }
    if (e.key === "Enter" && bulletIsPressed == true){
        bullet.bulletIsVisible = true;
        
        if(bullet.bulletIsVisible){
        bullet.x += bullet.speed;
        }
        if (bullet.x > canvas.width){
            bullet.bulletIsVisible = false;
        }

        bulletIsPressed = false;
        setTimeout(() => {
            bulletIsPressed = true;
        },500)
    }
}

document.addEventListener("keyup",keyUpHandler);
function keyUpHandler(e) {
    if (e.key === "ArrowUp"){
        HickoryBill.y += HickoryBill.gravity;
    } 
}
canvas.addEventListener("click",startGame);
    
function startGame () {
if (gameState === "start") {
    gameState = "readText";
} else if (gameState === "readText"){
    gameState = "playing";
}
}
