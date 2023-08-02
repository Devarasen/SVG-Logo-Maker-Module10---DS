class Shape {
    constructor(colour) {
        this.colour = colour;
    }

    render() {
        throw new Error("Child class must implement render() method.")
    }
}

class Triangle extends Shape {
    constructor(colour) {
        super(colour);
    }

    // Implement the SVG rendering logic for a triangle
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(colour) {
        super(colour);
    }
    
    // Implement the SVG rendering logic for a circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(colour) {
        super(colour);
    }
    
    // Implement the SVG rendering logic for a square
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}


module.exports = { Triangle, Circle, Square };