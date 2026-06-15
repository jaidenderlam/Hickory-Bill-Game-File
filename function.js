function gameinitial(){
    drawBackground();
  const myInitialFont = new FontFace ("myInitialFont", "url(./fontFiles/BleedingCowboys.ttf");
  myInitialFont.load().then(loadedFont => {
    document.fonts.add(loadedFont);
  })
    // draw text
    ctx.font = "110px myInitialFont";
    ctx.fillStyle = "black";
    ctx.fillText("Hickory Bill",canvas.width/2 - ctx.measureText("Hickory Bill").width/2,canvas.height/2-20);
  
    ctx.font = "60px myInitialFont";
    ctx.fillStyle = "black";
    ctx.fillText("click to start the instruction",canvas.width/2 - ctx.measureText("click to start the instruction").width/2,canvas.height/2 +130);
}
function readText(){
    drawBackground();
  const myCountryFont = new FontFace ("myCountryFont","url(./fontFiles/RangerEastwoodFont.ttf)");
  myCountryFont.load().then(loadedFont => {
    document.fonts.add(loadedFont);
  })

  const myheadingCountryFont = new FontFace ("myheadingCountryFont","url(./fontFiles/FortDeath.ttf)");
  myheadingCountryFont.load().then(loadedFont => {
    document.fonts.add(loadedFont);
  })
  // draw text
  ctx.font = "90px myCountryFont";
  ctx.fillStyle = "black";
  ctx.fillText("Key Rule to play this game!",canvas.width/2 - ctx.measureText("Key Rule to Play This Game!").width/2 +30 ,canvas.height/2-200);
  
  // draw text for how to operate the game
const textDialogue = "ArrowUp: Jump ⬆️\nArrowRight: Move Right ➡️\nArrowLeft: Move Left ⬅️\nArrowDown: Crouch 🧎\nEnter: Shoot 💥"
  const lines = textDialogue.split("\n");
  
  // draw text each line
  for (let i = 0; i< lines.length; i++) {
    ctx.font = "30px myheadingCountryFont";
    ctx.fillStyle ="black";
    ctx.fillText(lines[i],canvas.width/5 + 90, canvas.height/3 + 90 + i *60);
  }
  
   // draw information about the game
  ctx.font = "60px myheadingCountryFont";
  ctx.fillStyle = "black";
  ctx.fillText("YOUR GOAL:",canvas.width/2 +40, canvas.height/3 + 40);
  
  // draw directions how to play the game
  const script = " \t \u2022 Kill or Catch the BURGLAR\n \t \u2022 Avoid ANY OBSTACLES obstructing your path \n \t \u2022 Collect the ROPE to unleash your ULTIMATE power! \n       click to start the game";
 // draw text each line
  const line2 = script.split("\n");

  for (let i = 0; i < line2.length; i++) {
    ctx.font = "30px myheadingCountryFont";
    ctx.fillStyle ="black";
    ctx.fillText(line2[i],canvas.width/2 - 90, canvas.height/3 + 110 + i *60);
  }
}

function gameHasStart(){
    mainComponent();
   /* drawPerson();
  checkCollision();
  drawBurglar();
  moveBurglar();
  drawScore();
  drawCactus();
  drawRope();
  moveCactus();
  moveRope();
  updateHealth(); */
  timeCheck();
}

function gameOver(){
    mainComponent();
  // game over sign
  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  gameOvertext = "Game Over";
  ctx.fillText(gameOvertext,canvas.width/2 - ctx.measureText(gameOvertext).width/2,canvas.height/2);
  
   setTimeout(reset,3000);
}
function drawBackground(){
  ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function mainComponent(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // draw landbase
  ctx.fillStyle = "#87522D";
  ctx.fillRect(0,canvas.height - 100,canvas.width,80);
  
  ctx.fillStyle = "#844E28";
  ctx.fillRect(0,canvas.height - 100,canvas.width,100);

}
/*function moveBurglar(){
  burglar.x += burglar.speed;
}
function drawBurglar(){

}
function drawPerson(){
} 
function checkCollision(){
  let hickRight = HickoryBill.x + HickoryBill.w;
  let hickBottom = HickoryBill.y + HickoryBill.h;

  
} */
function reset(){
  time = 10000;
  gameState = "start";
  score = 0;
  keyIsPressed = true;
  bulletIsPressed = true;
  HickoryBill = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
    gravity:0.5,
    speed: 3
  }
  cactus = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
  }
  rope = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
  }
  bullet = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
  speed:3,
  bulletIsVisible: false
  }
  burglar = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
    gravity:0.5,
    speed: 3
  }
}

function timeCheck(){
  time--;
  if (time <= 0) {
    gameState = "gameOver";
  }
}
