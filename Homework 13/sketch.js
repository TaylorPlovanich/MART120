let player;
let obstacles = [];
let exit;

function setup() {
  createCanvas(400, 400);
  player = createPlayer(200, 200);
  exit = createExit(0, 0, 30, 30);
  createObstacle(100, 100, 30, color(255, 0, 0), 2, 1);
  createObstacle(300, 300, 50, color(0, 255, 0), -1, 3);
}

function draw() {
  background(220);
  drawBorders(width, height);
  movePlayer(player);
  drawPlayer(player);
  moveObstacles();
  drawObstacles();
  drawExit(exit);
  checkWin(player, exit);
}

function keyPressed() {
  movePlayerWithKeyboard(player, keyCode);
}

function mouseClicked() {
  createObstacle(mouseX, mouseY, 20, color(255, 0, 255), 0, 0);
}

function createPlayer(x, y) {
  return { x, y };
}

function drawPlayer(player) {
  fill(0, 0, 255);
  ellipse(player.x, player.y, 50);
}

function movePlayer(player) {
  // Move player using keyboard input in keyPressed()
}

function movePlayerWithKeyboard(player, keyCode) {
  if (keyCode === LEFT_ARROW) {
    player.x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    player.x += 10;
  } else if (keyCode === UP_ARROW) {
    player.y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    player.y += 10;
  }
}

function createObstacle(x, y, size, color, xSpeed, ySpeed) {
  obstacles.push({ x, y, size, color, xSpeed, ySpeed });
}

function drawObstacles() {
  for (let obstacle of obstacles) {
    fill(obstacle.color);
    rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
  }
}

function moveObstacles() {
  for (let obstacle of obstacles) {
    obstacle.x += obstacle.xSpeed;
    obstacle.y += obstacle.ySpeed;

    if (obstacle.x < -obstacle.size) {
      obstacle.x = width;
    } else if (obstacle.x > width) {
      obstacle.x = -obstacle.size;
    }

    if (obstacle.y < -obstacle.size) {
      obstacle.y = height;
    } else if (obstacle.y > height) {
      obstacle.y = -obstacle.size;
    }
  }
}

function createBorders(width, height) {
  return [
    { x: 0, y: 0, width: width, height: 10 },
    { x: 0, y: height-10, width: width, height: 10 },
    { x: 0, y: 10, width: 10, height: height-20 },
    { x: width-10, y: 10, width: 10, height: height-20 }
  ];
}

function drawBorders(width, height) {
  let borders = createBorders(width, height);
  for (let border of borders) {
    fill(0);
    rect(border.x, border.y, border.width, border.height);
  }
}

function createExit(x, y, width, height) {
  return { x, y, width, height };
}

function drawExit(exit) {
    fill(0, 155, 0);
    stroke(0);
    strokeWeight(1);
    rect(exit.x, exit.y, exit.width, exit.height);
  }

  function checkWin(player, exit) {
    if (
      player.x > exit.x &&
      player.x < exit.x + exit.width &&
      player.y > exit.y &&
      player.y < exit.y + exit.height
    ) {
      alert("You win!");
    }
  }