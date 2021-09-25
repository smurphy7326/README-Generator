// This is to help with the answers and responses
// AskBCS helped with this since it was in the wrong place
const fs = require('fs'); // when this is installed it helps to access and interact with the file system

const writeFile = fileContent => {
  return new Promise((resolve, reject) => { // Chained promise callback for the resolved case  and the rejected cases promise for both of them. Mozilla helped online with the result of this part
    // also had to make a new file where the README would go so they would not override my README. dest is for destination even thoguh a lot of the itme people use dist
    fs.writeFile('./dest/README.md', fileContent, err => { // fs.writefile(file,body, err) is the template for the writeFile
      if (err) {           // A simple if statement
        reject(err);       // When if there was something to reject it rejects 
        return;
      }
      resolve('New README has been made!'); // a message at the end of the terminal after you have filled in all the inforamtion
    });
  });
};

// this was given with a few hints from the cloned code
module.exports = writeFile;