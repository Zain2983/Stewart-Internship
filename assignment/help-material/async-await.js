function api(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Received with ID : " , dataID);
      resolve(200);
    }, 2000);
  });
}


///////////////////////////////////
// 1st way to call function
// async function getdata() {
//   let x = await api();
//   return x;
// }

// getdata().then((data)=>{console.log(data)})


///////////////////////////////////
// 2nd way to call function
// async function getAllData(){
//   try{
//     await api(1);
//     await api(2);
//   }
//   catch(error){
//     console.log("Error",error);
//   }
// }

// getAllData().then(()=>{
//   // console.log();
// })



// If we want to invoke the async await function right away 
// By using IIFE (Immediately Invoked Function Expression) 
(async function(){
  try{
    await api(1);
    await api(2);
  }
  catch(error){
    console.log("Error",error);
  }
})();