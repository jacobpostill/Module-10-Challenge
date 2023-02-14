import { Square, Triangle, Circle} from './shapes';

describe('Square', () => {
    describe('render', () => {
        it('It will create an svg that is a square with the correct colors and text', () => {
        const shape = new Square("JDP","black", "square", "yellow");
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeCol}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      
        </svg>`);
    });});});

    describe('Triangle', () => {
        describe('render', () => {
            it('It will create an svg that is a Triangle with the correct colors and text', () => {
            const shape = new Triangle("JDP","black", "square", "yellow");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 0 275, 200 25, 200" fill="${this.shapeCol}"/>
    
            <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
            
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
