// This is to help with the answers and responses
// AskBCS helped with this since it was in the wrong place
const fs = require('fs'); // when this is installed it helps to access and interact with the file system

const writeFile = fileContent => {
  return new Promise((resolve, reject) => { // Chained promise callback for the resolved case  and the rejected cases promise for both of them. Mozilla helped online with the result of this part
    fs.writeFile('./README.md', fileContent, err => { // fs.writefile(file,body, err) is the template for the writeFile
      if (err) {           // A simple if statement
        reject(err);       // When if there was something to reject it rejects 
        return;
      }
      resolve('New README has been made!');
    });
  });
};
// this was given with a few hints from the cloned code
module.exports = writeFile;