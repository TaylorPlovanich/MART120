let playerX, playerY;
let car1X, car1Y, car1Speed;
let car2X, car2Y, car2Speed;
let log1X, log1Y, log1Speed;
let log2X, log2Y, log2Speed;
let turtleX, turtleY, turtleSpeed;
let score = 0;

// Goal variables
let goalWidth = 400;
let goalHeight = 20;

function setup() {
  createCanvas(400, 400);
  playerX = width/2;
  playerY = height-20;
  car1X = 0;
  car1Y = height-40;
  car1Speed = 3;
  car2X = width;
  car2Y = height-80;
  car2Speed = -2;
  log1X = 0;
  log1Y = height-120;
  log1Speed = 1;
  log2X = width;
  log2Y = height-160;
  log2Speed = -2;
  turtleX = width;
  turtleY = height-200;
  turtleSpeed = -1;
}

function draw() {
  background(220);
  
  // Draw the player
  fill('green');
  ellipse(playerX, playerY, 20, 20);
  
  // Draw the cars
  fill('red');
  rect(car1X, car1Y, 40, 20);
  rect(car2X, car2Y, 40, 20);
  
  // Draw the logs
  fill('brown');
  rect(log1X, log1Y, 80, 20);
  rect(log2X, log2Y, 80, 20);
  
  // Draw the turtles
  fill('orange');
  ellipse(turtleX, turtleY, 40, 20);
  
  // Move the obstacles
  car1X += car1Speed;
  if (car1X > width) {
    car1X = 0;
  }
  
  car2X += car2Speed;
  if (car2X < -40) {
    car2X = width;
  }
  
  log1X += log1Speed;
  if (log1X > width) {
    log1X = -80;
  }
  
  log2X += log2Speed;
  if (log2X < -80) {
    log2X = width;
  }
  
  turtleX += turtleSpeed;
  if (turtleX < -40) {
    turtleX = width;
  }
  
  // Display score
  textSize(20);
  text("Score: " + score, 10, 30);

   // Check if player wins
   if (score >= 3) {
    textSize(32);
    fill('green');
    text("You win!", width/2 - 60, height/2);
    noLoop();
  }
  
  // Increase score if player reaches other side
  if (playerY < 0) {
    score += 1;
    playerX = width/2;
    playerY = height-20;
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    playerY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    playerY += 10;
  } else if (keyCode === LEFT_ARROW) {
    playerX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    playerX += 10;
  }
}
