const fs = require('fs');
var loc = './04-file-operations/data.txt';

///////////////////////////////////////////////////////
// // Asynchronous Replace 
// fs.readFile(loc, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     const modifiedData = data.replace('Test File', 'new text');
//     fs.writeFile(loc, modifiedData, (err) => {
//         if (err) {
//             console.error('Error writing to file:', err);
//             return;
//         }
//         console.log('Text replaced successfully.');
//     });
// });

///////////////////////////////////////////////////////
// // Synchronous Replace
// try {
//     let data = fs.readFileSync(loc, 'utf8');
//     data = data.replace('text to replace', 'new text');
//     fs.writeFileSync(loc, data);
//     console.log('Text replaced successfully.');
// } catch (err) {
//     console.error('Error replacing text:', err);
// }


///////////////////////////////////////////////////////
// // Promises Based Replace
// const fs = require('fs').promises;

// async function replaceInFile() {
//     try {
//         let data = await fs.readFile(loc, 'utf8');
//         data = data.replace('text to replace', 'new text');
//         await fs.writeFile(loc, data);
//         console.log('Text replaced successfully.');
//     } catch (err) {
//         console.error('Error replacing text:', err);
//     }
// }

// replaceInFile();