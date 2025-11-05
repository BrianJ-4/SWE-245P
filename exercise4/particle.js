// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // update the size of the element we render
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  update_big_movement() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Arc extends Particle {
  constructor(x, y) {
    super(x, y);
    this.width = random(200);
    this.height = random(200);
    this.startAngle = 180;
    this.stopAngle = 360;
  }

    update() {
      super.update_big_movement();
    }

    show() {
      stroke(255);
      strokeWeight(25);
      arc(this.x, this.y, this.width, this.height, this.startAngle, this.stopAngle, CHORD);
    }
}

class Line extends Particle {
  constructor(x, y, x2, y2) {
    super(x, y);
    this.x2 = x2;
    this.y2 = y2;
  }

    update() {
      super.update_big_movement();
    }

    show() {
      stroke(255);
      strokeWeight(25);
      line(this.x, this.y, this.x2, this.y2);
    }
}