class Shape {
  calculateArea(length, width) {
    return length * width;
  }

  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}
class Triangles extends Shape {
  calculateArea(base, height) {
    return 0.5 * base * height;
  }
}
const shape = new Shape();
const triangles = new Triangles();

console.log(shape.calculateArea(4, 5)); // Output: 20 (rectangle area)
console.log(shape.calculateArea(3)); // Output: 28.274333882308138 (circle area)

console.log(triangles.calculateArea(4, 5)); // Output: 10 (triangle area)
console.log(triangles.calculateArea(3)); // Output: 28.274333882308138 (circle area, inherited from Shape)
console.log(triangles.calculateArea(4, 4, 6)); // Error: no matching method signature
class Triangle extends Shape {
  calculateArea(base, height) {
    return 0.5 * base * height;
  }

  calculateCircleArea(radius) {
    return super.calculateArea(radius); 
  }
}