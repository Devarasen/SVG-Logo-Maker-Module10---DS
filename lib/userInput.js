const inquirer = require ('inquirer');

// Handle user input
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'Enter text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColour',
            message: 'Enter shape color (keyword or hex):',
        },
        {
            type: 'input',
            name: 'backgroundColour',
            message: 'Enter background color (keyword or hex):',
        },
    ]);

    return userInput;
}

module.exports = getUserInput;