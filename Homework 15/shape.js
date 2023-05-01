class Triangle {

    //constructor
  constructor(x1, y1, x2, y2, x3, y3, r, g, b) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display() {
    fill(this.r, this.g, this.b);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

  class Rectangle {
    constructor(x, y, w, h, r, g, b) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.r = r;
      this.g = g;
      this.b = b;
    }
  
    display() {
      fill(this.r, this.g, this.b);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  class Quad {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, r, g, b) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.x4 = x4;
      this.y4 = y4;
      this.r = r;
      this.g = g;
      this.b = b;
    }
  
    display() {
      fill(this.r, this.g, this.b);
      quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}
  