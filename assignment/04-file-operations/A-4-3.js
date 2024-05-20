// const fs = require('fs');
var loc = './04-file-operations/data.txt';

///////////////////////////////////////////////////////
//     Writing Files
///////////////////////////////////////////////////////

// // Asynchronous Write
// fs.readFile(loc, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     const modifiedData = ("Hello this is the new file");
//     fs.writeFile(loc, modifiedData, (err) => {
//       console.log("Writing File now")
//         if (err) {
//             console.error('Error writing to file:', err);
//             return;
//         }
//         console.log('File written successfully.');
//     });
// });



// // Synchronous Write
// try {
//     const data = fs.readFileSync(loc, 'utf8');
//     const modifiedData = data.replace('Test File', 'new text');
//     fs.writeFileSync(loc, modifiedData);
//     console.log('File written successfully.');
// } catch (err) {
//     console.error('Error:', err);
// }

// console.log('This should execute last');




// // Promise Based Write 
// const fs = require('fs').promises;

// async function writeFile(x1,x2) {
//     try {
//         const data = await fs.readFile(x1, 'utf8');
//         //const modifiedData = ('ayooooooooooooo')
//         await fs.writeFile(x1, x2);
//         console.log('File written successfully.');
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }

// writeFile(loc,'Hello papi');
