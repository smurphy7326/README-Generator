// This will allow the user to make the switch on the badges from the licenses questions

licenseBadge = license => {
    switch (license) {
    case 'MIT':
        return '[![License:MIT](https://img.shields.io/badge/licence-MIT-blue)]';
    case 'Apache-2.0':
        return '[![License:Apache-2.0](https://img.shields.io/badge/licence-Apache--2.0-green)]';
    case 'GNU':
        return '[![License:GNU](https://img.shields.io/badge/licence-GNU-red)]';
    default:
        return '';
}}