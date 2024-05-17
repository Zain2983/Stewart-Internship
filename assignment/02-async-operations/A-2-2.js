// https://www.w3resource.com/javascript-exercises/asynchronous/index.php

// 1 Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// function greet(name) {
//   console.log(`Hello ${name}! - After 2 secs`);
//   console.log('After callback');
// }

// function greetafter2(callback) {
//   console.log('Before callback');
//   setTimeout(()=>{
//     callback('DON');
//   },2000);
// }

// greetafter2(greet);

////////////////////////////////////////////////////////////

// 2 different ways to write functions

// -----1
// function hello(){
//   console.log("Hello");
// }
// setTimeout(hello,2000);

// -----2
// setTimeout(()=>{
//   console.log("Hello");
// },2000)

////////////////////////////////

// Callbacks

// function sum(a,b){
//   console.log(a+b);
// }

// function calc(a,b,sumCallback){
//   sumCallback(a,b);
// }

// calc(1,2,sum);

// calc(1,2,(a,b)=>{
//   console.log(a+b);
// })

////////////////////////////////

// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log("Data : ", dataId);
//     if(getNextData){getNextData();}
//   },2000);
// }

// getData(1,()=>{
//   getData(2)
// });

////////////////////////////////

// let prom = new Promise((resolve,reject)=>{
//   console.log("Im a promise");
//   resolve('Hello');
// })

// console.log(prom);

////////////////////////////////

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data : ", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }

// getData(1, () => {
//   getData(2);
// });

////////////////////////////////

// Using promises 

// const getpromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("I'm a promise");
//     //resolve('success');
//     reject('failure 111');
//   });
// };

// let prom = getpromise();
// prom.then(()=>{
//   console.log(`RTD1 = Accepted`);
// }).catch((x1)=>{
//   console.log(`RTD1 = Rejected`);
//   console.log(`${x1}`)
// })

////////////////////////////////

// Promise Chaining 

// const fetchUrl1 = () => {
//   return new Promise(async (resolve, reject) => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const fetchUrl2 = () => {
//   return new Promise(async (resolve, reject) => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const fetchUrl3 = () => {
//   return new Promise(async (resolve, reject) => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// // Chaining the promises
// fetchUrl1()
//   .then(data1 => {
//     console.log('Data from URL 1:', data1);
//     return fetchUrl2();
//   })
//   .then(data2 => {
//     console.log('Data from URL 2:', data2);
//     return fetchUrl3();
//   })
//   .then(data3 => {
//     console.log('Data from URL 3:', data3);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// https://www.youtube.com/watch?v=d3jXofmQm44

// 55:23