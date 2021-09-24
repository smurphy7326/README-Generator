// Page Template for the README that is going to be generated

module.exports = data => {
    console.log(data); // This is the input data that people will insert into the prompts
    return `
    
    ![license](https://img.shields.io/badge/licence-MIT-blue)
    # ${data.projectTitle}

    ## ${data.projectDescription}

    ## Installation
    ${data.installation}
    ## Contributions 
    ${data.githubUsernameContributors}
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