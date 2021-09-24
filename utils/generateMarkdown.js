// This is to help with the answers and responses


const writeNewFile = fileContent => {
  return new promise((resolve, reject) => { // Chained promise callback for the resolved case  and the rejected cases promise for both of them. Mozilla helped online with the result of this part
    fs.writeNewFile('./README.md', fileContent, writeFileError => { // fs.writefile(file,body, err) is the template for the writeFile
      if (writeFileError) {           // A simple if statement
        reject(writeFileError);       // When if there was something to reject it rejects 
        return;
      }
      resolve('File has been created!');
    });
  });
};
// this was given with a few hints from the cloned code
module.exports = writeNewFile;