const inquirer = require('inquirer');
const  {Square, Triangle, Circle, GenerateLogo} = require('./lib/shapes')

class logoInfo {
    constructor(text, textCol, shape, shapeCol) {
        this.text = text
        this.textCol = textCol
        this.shape = shape
        this.shapeCol = shapeCol
    }
}

function info() {
    inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'Which letters would you like in your logo? (Up to three)',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'list',
            message: 'What shape would you like you logo to be?',
            name: 'shape',
            choices: ['square', 'triangle', 'circle']
        },
        {
            type: 'input',
            message: 'What color would you like the text to be? (Enter name or hex key)',
            name: 'textCol'
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be? (Enter name or hex key)',
            name: 'shapeCol'
        }
    ])
    .then((response) => {
        console.log(response)
        let generateLogo = new GenerateLogo(response.text, response.textCol, response.shape, response.shapeCol)
    })
}

info()