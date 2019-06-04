const fs = require('fs');

// create a file
fs.writeFile('example.txt', 'The quick brown fox jumped over the lazy dog\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully created\n');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});

// create file to rename
fs.writeFile('rename-example.txt', 'I am about to be renamed\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully created\n');
    }
})

// rename a file
fs.rename('rename-example.txt', 'renamed.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully renamed\n');
    }
});

// add data to a file
fs.appendFile('example.txt', 'Extra! Extra!\n', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Data successfully appended to file');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});

// delete a file
fs.unlink('renamed.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully deleted\n');
    }
});

// make a new folder
fs.mkdir('folder', (err) => {
    if (err) {
        console.log(err);
    } else {
        // delete the new folder
        fs.rmdir('folder', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File successfully deleted\n');
            }
        });
    }
});

// read contents of directory
fs.readdir('./',  (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});

