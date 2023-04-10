let playerX = 200;
let playerY = 200;
let obstacles = [];
let exit = {x: 0, y: 0, width: 30, height: 30};

function setup() {
  createCanvas(400, 400);
  obstacles.push({x: 100, y: 100, size: 30, color: color(255, 0, 0), xSpeed: 2, ySpeed: 1});
  obstacles.push({x: 300, y: 300, size: 50, color: color(0, 255, 0), xSpeed: -1, ySpeed: 3});
}

function draw() {
  background(220);

  // Draw exit arrow
  fill(255);
  noStroke();
  triangle(width-70, 30, width-40, 0, width-40, 60);
  stroke(0);
  strokeWeight(1);

  // Update obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x += obstacles[i].xSpeed;
    obstacles[i].y += obstacles[i].ySpeed;

    // Check if obstacle is off the edge of the canvas and wrap it around
    if (obstacles[i].x < -obstacles[i].size) {
      obstacles[i].x = width;
    } else if (obstacles[i].x > width) {
      obstacles[i].x = -obstacles[i].size;
    }

    if (obstacles[i].y < -obstacles[i].size) {
      obstacles[i].y = height;
    } else if (obstacles[i].y > height) {
      obstacles[i].y = -obstacles[i].size;
    }
  }

  // Draw obstacles
  for (let i = 0; i < obstacles.length; i++) {
    fill(obstacles[i].color);
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].size, obstacles[i].size);
  }

  // Draw exit
  fill(0, 155, 0);
  stroke(0);
  strokeWeight(1);
  rect(exit.x, exit.y, exit.width * 4, exit.height * 4);  

  // Draw player
  fill(0, 0, 255);
  ellipse(playerX, playerY, 50);

  // Check if player has reached the exit
  if (playerX > exit.x && playerX < exit.x + exit.width && playerY > exit.y && playerY < exit.y + exit.height) {
    // Player has reached the exit
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("You won!", width/2, height/2);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    playerX += 10;
  } else if (keyCode === UP_ARROW) {
    playerY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    playerY += 10;
  }
}

function mouseClicked() {
  // Add a new obstacle at the mouse position
  obstacles.push({x: mouseX, y: mouseY, size: 20, color: color(255, 0, 255), xSpeed: 0, ySpeed: 0});
}

