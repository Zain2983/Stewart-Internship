

// Basic Arrow Function
// const sqr = (num) => num*num

// // Basic Arrow Function
// const sqr = (num) => {
//     let x = num*num; 
//     // console.log(x);
//     return x;
// }

// let x = sqr(13)
// console.log(x);

// Basic Way to fetch data using promises
// the fetch function returns a promise
// const url = `https://jsonplaceholder.typicode.com/todos/1`
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.error(err);
// })

// We can use async/await to make it easier and more clean
// const LoadData = async () => {
//     try {
//       const url = `https://jsonplaceholder.typicode.com/todos/1`;
//       const res = await fetch(url);
//       console.log(res.status);
//       const data = await res.json();
//       //console.log(data);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
  ///////////////////////////////////
  // Then we have 3 different ways to call the function
  
  ////////// 1 
  // const data = LoadData();
  // console.log(data);
  
  ////////// 2 
//   LoadData().then((data)=>console.log(data))
  
  ////////// 3 
  // async function fetchData(){
  //     const data = await LoadData();
  //     console.log(data);
  // }
  // fetchData();
  
  

//////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=z-H8S83jJec
// 6 :36 

// https://www.youtube.com/watch?v=_9vgd9XKlDQ
// 7:34



// function greet(name,callback){
//     console.log('Hi'+ ' ' + name);
//     callback();
// }

// function callMe(){
//     console.log("Im a callback function");
// }

// greet('Peter',callMe);




//////////////////////////////////////////////////////////




// // We can use async/await to make it easier and more clean
// const LoadData = async () => {
//   try {
//     const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
//     const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
//     const url3 = `https://jsonplaceholder.typicode.com/todos/3`;

//     const results = await Promise.all([
//         fetch(url1),
//         fetch(url2),
//         fetch(url3)
//       ])

//       const dataPromises = results.map(result=> result.json())
//       const finalData = await Promise.all(dataPromises);
//       console.log(finalData);

//     // const res1 = await fetch(url1);
//     // const data1 = await res1.json();
//     // const res2 = await fetch(url2);
//     // const data2 = await res2.json();
//     // const res3 = await fetch(url3);
//     // const data3 = await res3.json();
//     //console.log(data);
//     // return [data1,data2,data3];

//   } catch (err) {
//     console.log(err);
//   }
// };

// LoadData().then((data)=>console.log(data))


// ////////////////////// IIFE ////////////////////////
// (function () {
//   console.log("Hello this is an IIFE");
// })();




