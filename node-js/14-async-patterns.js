// 1st way to execute the code

const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    console.log(first);
    console.log(second);
    await writeFilePromise(
      "./content/new.txt",
      `1st File : ${first} \n2nd File : ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();

////////////////////////////////////////////////////////////

// 2nd way to execute the code

// const { readFile, writeFile } = require("fs").promises;
// // const util = require("util");
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf8");
//     const second = await readFile("./content/second.txt", "utf8");
//     console.log(first);
//     console.log(second);
//     await writeFile(
//       "./content/new.txt",
//       `1st File : ${first} \n2nd File : ${second}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

////////////////////////////////////////////////////////


// Old Ineffecient Code
// where we write everything ourself 
// and create our own wrapper function

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err)=> console.log(err))