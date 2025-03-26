const fs = require('fs');

console.log('Read&Write!');
//WriteFile
//Asynchronous Method (Non-blocking)
fs.writeFile('text.txt', 'Hello, this is Node.js! Asynchronous Method (Non-blocking)', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully, for Asynchronous Method (Non-blocking)!');
    }
});

fs.writeFile('textWq.txt', 'Hello, this is Node.js! Asynchronous Method (Non-blocking)', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully, Asynchronous Method (Non-blocking)!');
    }
});
//Synchronous Method (Blocking)
try {
    fs.writeFileSync('example.txt', 'Hello, this is Node.js! Synchronous Method (Blocking)');
    console.log('File written successfully,Synchronous Method (Blocking)!');
} catch (err) {
    console.error('Error writing file:', err);
}


//Reading a File
//Asynchronous Method (Non-blocking)
fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file for:', err);
    } else {
        console.log('File content for Asynchronous Method (Non-blocking):', data);
    }
});

//Synchronous Method (Blocking)
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File content for Synchronous Method (Blocking) :', data);
} catch (err) {
    console.error('Error reading file:', err);
}

//Appending to a File
fs.appendFile('example.txt', '\nAppended content!', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content appended successfully!');
    }
});

//Renaming a File
fs.rename('example.txt', 'newfile.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully!');
    }
});

//Deleting a File
fs.unlink('textWq.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});

console.log('Using Promises for File Operations!');
// Using Promises for File Operations
async function handleFile() {
    try {
        await fs.promises.writeFile('eq.txt', 'Hello, using promises!');
        console.log('File written successfully for Using Promises!');

        const data = await fs.promises.readFile('eq.txt', 'utf8');
        console.log('File content Using Promises :', data);

        await fs.promises.appendFile('eq.txt', '\nAdding more data...');
        console.log('Content appended successfully Using Promises!');

        await fs.promises.rename('eq.txt', 'renamed.txt');
        console.log('File renamed successfully Using Promises!');

        await fs.promises.unlink('renamed.txt');
        console.log('File deleted successfully Using Promises!');
    } catch (err) {
        console.error('Error:', err);
    }
}

handleFile();
