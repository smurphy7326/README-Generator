// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // when this is installed it helps to access and interact with the file system
const generateMarkdown = require('./utils/generateMarkdown');

// Question Section for the user and the README
const promptUser = () => {
    return inquirer.prompt([
        { 
            type: 'input', // This is when you type in your response 
            name: 'projectTitle', 
            message: 'Enter a title for your project', // This is the message that will appear in the terminal box
            validate: titleName => {
                if (titleName) {
                    return true; // If this is valid and you entered a title this will appear
                } else {
                    console.log('Please enter a title for the project!'); // If nothing is entered the message will appear 
                    return false; 
                }
            }
        },

        {
            type: 'input', // the type of input where you can write your own answers
            name: 'projectDescription', 
            message: 'Write a breif message of the project.', // writes a description of the project
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description of the project.') // 
                    return false;
                }
            }
        },
        // In the requirements it has a table of contents but that will be used at the end of the project in the index
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required tpo install the project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for your project!');
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'userUsage',
            message: 'Provide instructions and exompales for the use of this project.',
            validate: installUserInput => {        // Arrow function
                if (installUserInput) {
                    return true;
                } else {
                    console.log('Please enter usage informtion for the project.');
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Select a licence for this project',
            choices: [       // this was useful from teh weekly inclass assignments that were used to help with the choices task
                // lists of licenses were taken from a list online, and placed in alphabetical order
                'Apache-2.0', 'GNU', 'IPL-1.0', 'MIT', 'MPL-2.0'
            ],
            validate: licenseSelection => { // Arrow function
                if(licenseSelection) {
                    return true;
                } else {
                    console.log('Please choose a license.');
                    return false;
                }
            }
        },
        {
        type: 'confirm', // This choice is more of a yes or no answer so there is no need for a if else like the other choices above. 
        name: 'otherContributors',
        message: 'Are there other people cotributing to this project?',
        default: true    // for the deafault should they just hit enter, it will then ask for the username of the other contributors
        },
        { 
            type: 'input', // They are typing in the name of the Github usernames if you answered there are other collaborators 
            name: 'githubUsernameContributors',
            message: 'Provide the Github username for each collaborator.',
            when: ({
                githubUsernameContributors
            }) => githubUsernameContributors
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'Enter any tests instructions for the project.',
            validate: testInstructions => {
                if (testInstructions) {
                    return true;
                } else {
                    console.log('Enter test instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username:', 
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter a valid email address.');
                    return false;
                }
            }
        }

    ])
// All of the answers at the end
.then(userPropmtData => {
    return userPropmtData;
});
};



// this helps run the function

promptUser()
.then(userPromptData => {
    return generateMarkdown(userPromptData);
})
.then(pageMarkdown => {
    return newFile(pageMarkdown);
})
.then()
// helps catch errors in the code
.catch(err => {
    return console.lof(err);
})

