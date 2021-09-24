// Page Template for the README that is going to be generated 
// Page Template that was helpful from the weekly module in order to help with organization

module.exports = data => {
    console.log(data); // This is the input data that people will insert into the prompts
    // since there can be no quotes in the quotes - This is from the general README things
    // It will pull the license, title, Description, Installation, Usage, Licenses, Instructions, and Questions
    return `
    
    ![license](https://img.shields.io/badge/licence-MIT-blue)
    # ${data.projectTitle}

    ## ${data.projectDescription}

    ## Installation
    ${data.installation} 
    ## Usage
    ${data.userUsage}
    ## Licenses
    ${data.licenses}
    ## Test Instructions
    ${data.tests}


    ### Questions or concerns?
    * [Github](https://github.com/${data.github} "${data.github}")
    * [Email](Email:${data.email})
    `
}