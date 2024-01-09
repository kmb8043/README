// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input 

const questions = [

       
        {
            type:'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
    
        {
            type:'input',
            name: 'description',
            message: 'Add a description about your project.',
        },

        {
            type:'input',
            name: 'screenshot',
            message: 'Please add a screenshot of your project.',
        },

        {
            type:'input',
            name: 'link',
            message: 'Please paste your URL link.',
        },

        {
            type:'input',
            name: 'install',
            message: 'Add installation information for you project'
        },
    
        {
            type:'input',
            name: 'usage',
            message: 'State the usage of your project.',
        },
    
        {
            type:'input',
            name: 'GitHub',
            message: 'Add your GitHub username.',
        },

        {
            type:'input',
            name: 'contributors',
            message: 'List any contributors. If none, please write "none.',
        },
    
        {
            type:'list',
            name: 'license',
            message: 'Choose a license for the application',
            choices: ['MIT' , 'Apache' , 'GPL' , 'None' ]
        },
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
     console.log("Creating a README.md file...");
     fs.writeToFile("./README.md" , generateMarkdown(responses));

    });
   }

// Function call to initialize app
init();
