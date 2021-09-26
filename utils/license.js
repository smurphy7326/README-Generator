// This will allow the user to make the switch on the badges from the licenses questions

const licenseBadge = licenses => {
    console.log(licenses);
    switch (licenses) {
       case 'Apache-2.0':
        return '[![License:Apache-2.0](https://img.shields.io/badge/licence-Apache--2.0-green)]';
    case 'GNU':
        return '[![License:GNU](https://img.shields.io/badge/licence-GNU-red)]';
    case 'MIT':
        return '[![License:MIT](https://img.shields.io/badge/licence-MIT-blue)]';
    
    default:
        return '';
}}

const licenseLink = licenses => {
    switch (licenses) {
        case 'Apache2-0':
            return 'https://www.apache.org/licenses/LICENSE-2.0';
        case 'GNU': 
            return 'https://www.gnu.org/licenses/licenses.en.html';
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        default:
            return '';
    }
}

module.exports = {licenseBadge, licenseLink}