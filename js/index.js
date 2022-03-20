// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{

        message: "What is your repository called?",
        type: 'input',
        name: 'title',

    },
    {  
        message: "Provide a description for your app:",
        type: 'input',
        name: 'description'
    },
    {
        message: "What does the user need to install? If none, press enter",
        type: 'input',
        name: 'install'

    },
    {
        message: "How would someone use your app?",
        type: "input",
        name: "usage"
    }, {
        message: "What are the guidlines for contribution? If none, press enter",
        type: "input",
        name: "contribute"
    },
    {
        message: "Are there any tests for your application?",
        type: "input",
        name: "tests"
    },
    {
        message: "Please enter your github username:",
        type: "input",
        name: "github"
        
    },
    {
        message: "If a user had any questions, what is the best way to reach you?",
        type: "input",
        name: "email"
    },
    {
        message: "What license would you like to include?",
        type: "list",
        name: "license",
        choices: ['MIT', 'GNU GPLv3', 'None', "Choose Later"]
    }
    ]).then((answers) => {
        writeToFile("./dist/README.md", generateMarkdown(answers));
    })
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            console.log(err);
        } 
        else{
            console.log("success");
        }
    });
}

// TODO: Create a function to initialize app
function init() { 
    questions();
}

// Function call to initialize app
init();
