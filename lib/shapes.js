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
        return `<polygon points="150,18 244,182 56,182" fill="${this.colour}" />`;
    }
}

class Circle extends Shape {
    constructor(colour) {
        super(colour);
    }
    
    // Implement the SVG rendering logic for a circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    }
}

class Square extends Shape {
    constructor(colour) {
        super(colour);
    }
    
    // Implement the SVG rendering logic for a square
    render() {
        const squareSize = 150;
        const squareX = (300 - squareSize) / 2;
        const squareY = (200 - squareSize) / 2;

        return `<rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" fill="${this.colour}" />`;
    }
}


module.exports = { Triangle, Circle, Square };