const inquirer = require('inquirer');
const  {Square, Triangle, Circle, GenerateLogo} = require('./lib/shapes')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// In these lines of codes we are importing previous classes to be used in this Javascript


function info() {
    inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'Which letters would you like in your logo? (Up to three)',
            name: 'text',
            maxLength: 3
            //We import maxlength-input and use it here so no one will be able to create a logo with more then three characters
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
            message: 'What color would you like the shape to be? (Enter name or hex key - include #)',
            name: 'shapeCol'
        }
        //Here we are creating a function to ask the prompts oif what they would like for there logo
    ])
    .then((response) => {
        console.log(response)
        let generateLogo = new GenerateLogo(response.text, response.textCol, response.shape, response.shapeCol)
        generateLogo.shapeChoice()
        //Here we are using an imported GenerateLogo and asiging the constrocturs the values from the prompt. Then we are running the shape choice function to create the logo
    })
}

info()
//Here we run the info function to activate the prompts