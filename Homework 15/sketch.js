// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var triangleObject;
var circleObject;
var rectObject;

    // Create the rectangle
    rectObject = new Rectangle(100, 100, 50, 75, 0, 0, 255);

    //create the quad
    quadObject = new Quad(0, 0, 50, 50, 100, 200, 50, 150, 255, 0, 0)
        

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
        
        //create the object
        triangleObject = new Triangle(250, 200, 300, 250, 350, 200, 0, 255, 0)
        
    }
    

    createCharacter(200, 80);
}

function draw() {
    background(0, 0, 255);
    stroke(0);
    fill(0);

    //create the object
    rectObject = new Rectangle(100, 100, 50, 75, 0, 0, 255)


    //create and display
    triangleObject.display();
    rectObject.display();
    quadObject.display();

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,80);
    drawCharacter();
    characterMovement();


    // draw the enemies
  for (var i = 0; i < shapeXs.length; i++) {
    var enemyColor = color(random(255), random(255), random(255));
    fill(enemyColor);
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        



        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (characterX > width/2 - 25 && characterX < width/2 + 25 && characterY > height - 100) {
        fill(0);
        stroke(5);
        textSize(26);
        textAlign(CENTER);
        text("You Win!", width / 2, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (keyIsDown(LEFT_ARROW)) {
        characterX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        characterX += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        characterY -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        characterY += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(50, 205, 50);
    circle(characterX, characterY, 45);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness - 50, width, thickness);
    // right border
    rect(width - thickness, 0, thickness, height);

    // exit gap
    fill(255, 0, 0);
    rect(width/2 - 25, height - thickness - 50, 50, 50);
}
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
