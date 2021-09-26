// Page Template for the README that is going to be generated 
// Page Template that was helpful from the weekly module in order to help with organization
const license = require('../utils/license.js');


module.exports = data => {
    console.log(data); // This is the input data that people will insert into the prompts
    // since there can be no quotes in the quotes - This is from the general README things
    // It will pull the license, title, Description, Installation, Usage, Licenses, Instructions, and Questions
    return `

${license.licenseBadge(data.licenses)}
# ${data.projectTitle}


## Description 
${data.projectDescription}

## Table of Contents
* [Installation Instructions](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contribution](#contributions)
* [Tests Instructions](#tests)
* [Questions](#questions)

## Installation
${data.installation} 
## Usage
${data.userUsage}
## Licenses
${license.licenseLink(data.licenses)}
## Contributions 
${data.githubUsernameContributors}
## Test Instructions
${data.tests}


### Questions or concerns?
* [Github](https://github.com/${data.github} "${data.github}")
* [Email](Email:${data.email})
    `
}