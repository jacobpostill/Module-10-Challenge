const  {Square, Triangle, Circle} = require('./shapes')

describe('Square', () => {
    describe('render', () => {
        it('It will create an svg that is a square with the correct colors and text', () => {
        const anser = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect width="200" height="200" x="50" y="0" fill="yellow"/>
        
        <text x="155" y="120" font-size="60" text-anchor="middle" fill="black">JDP</text>
      
        </svg>
        </svg>`
        const shape = new Square("JDP","black", "square", "yellow");
        expect(shape.render()).toEqual(anser);
    });});});

    describe('Triangle', () => {
        describe('render', () => {
            it('It will create an svg that is a Triangle with the correct colors and text', () => {
            const shape = new Triangle("JDP","black", "square", "yellow");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 0 275, 200 25, 200" fill="yellow"/>
    
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="black">JDP</text>

            </svg> 
            </svg>`);
        });});});
    

    describe('Circle', () => {
        describe('render', () => {
            it('It will create an svg that is a Triangle with the correct colors and text', () => {
            const shape = new Circle("JDP","black", "square", "yellow");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${this.shapeCol}" />
                  
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
                  
            </svg>  `);
        });});});
