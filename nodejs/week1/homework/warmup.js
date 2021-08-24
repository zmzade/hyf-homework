console.log("inside warmup file");
//Create a class called Circle. It should have one property called radius

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return this.radius * 2 * Math.PI;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
const circle1 = new Circle(20);
const circle2 = new Circle(30);
circle.getDiameter(); // 20
console.log(
  `circle: Diameter = ${circle.getDiameter()}, Circumference = ${circle.getCircumference()}, Area = ${circle.getArea()}`
);
console.log(
  `circle 1: Diameter = ${circle1.getDiameter()}, Circumference = ${circle1.getCircumference()}, Area = ${circle1.getArea()}`
);
console.log(
  `circle 2: Diameter = ${circle2.getDiameter()}, Circumference = ${circle2.getCircumference()}, Area = ${circle2.getArea()}`
);
