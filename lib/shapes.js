const fs = require('fs');

class logoCreator {
    constructor(logo) {
        this.logo = logo
    }
    renderLogo () {
        fs.writeFile('logo.svg', this.logo, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg'))    
        }
}

class Square {
    constructor(text, textCol, shape, shapeCol) {
        this.text = text
        this.textCol = textCol
        this.shape = shape
        this.shapeCol = shapeCol
    }
    render() {
        var logoShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect width="200" height="200" x="50" y="0" fill="${this.shapeCol}"/>
        
        <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      
        </svg>`
        let gen = new logoCreator(logoShape)
        gen.renderLogo()

    }
    
}

class Triangle {
    constructor(text, textCol, shape, shapeCol) {
        this.text = text
        this.textCol = textCol
        this.shape = shape
        this.shapeCol = shapeCol
    }
    render() {
        var logoShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" x="50" y="0" fill="${this.shapeCol}"/>

        <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
        
        </svg>`
        let gen = new logoCreator(logoShape)
        gen.renderLogo()

    }
}

class Circle {
    constructor(text, textCol, shape, shapeCol) {
        this.text = text
        this.textCol = textCol
        this.shape = shape
        this.shapeCol = shapeCol
    }
    render() {
        var logoShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeCol}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      
        </svg>`
        let gen = new logoCreator(logoShape)
        gen.renderLogo()

    }
}

class GenerateLogo {
    constructor(text, textCol, shape, shapeCol) {
        this.text = text
        this.textCol = textCol
        this.shape = shape
        this.shapeCol = shapeCol
      }
      
      shapeChoice() {
        if (this.shape == 'square') {
          let square = new Square(this.text, this.textCol, this.shape, this.shapeCol)
          square.render()
          console.log("hello")
        } else if (this.shape == 'triangle') {
          let tringle = new Triangle(this.text, this.textCol, this.shape, this.shapeCol)
          tringle.render()
        } else if (this.shape == 'circle') {
            let circle = new Circle(this.text, this.textCol, this.shape, this.shapeCol)
            circle.render()
            
      }
    }} 

    module.exports = { Square, Triangle, Circle, GenerateLogo }