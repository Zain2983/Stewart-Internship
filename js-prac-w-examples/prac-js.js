/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//        Arrays
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// var arr1 = new Array();
// var arr2 = new Array(10,20,30,"Pakistan",true,null);

// console.log("---------------------------------------")
// console.log(arr1.length);
// console.log(arr2.length);
// console.log("---------------------------------------")

// arr1[0]=50;
// arr1[1]=100;

// arr1.push(100);
// arr1.push(300);

// console.log("Length of arr1 : " + arr1.length);


// // print the complete array
// for (let i = 0; i < arr1.length; i++) {
//   console.log("Element " + i + " : " +  arr1[i]);
// }

/////////////////////////////////////////////////////////    
//     var arr1=[2,10]
//     arr1.Age = 30 ;
//     arr1.ID = 112;
//     console.log(arr1.length)


//     arr1["Age"]=50;
//     console.log(arr1.length)
//     console.log("Output of toString() : " + arr1.toString());

//     console.log("Age is : " + arr1.Age) ; 
// /////////////////////////////////////////////////////////    
//     console.log("---------------------------------------")
//     for(var k in arr1){
//       console.log("key is : " + k )
//       console.log("Value is : " + arr1[k]);
//     }





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//        Functions
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// function sum(a, b) {
//     var c = a + b;
//     return c;
// }

// var x = 10; var y = 100;
// var d = sum(x, y);
// console.log("The output of the function is : " + d)

// function sum(){
//     var s=0;
//     for(var a=0;a<arguments.length;a++){
//         s = s+arguments[a];
//     }
//     return s
// }


// var d = sum(10,10);
// console.log("Output1 : " + d);

// d = sum(10,10,10);
// console.log("Output2 : " + d);

// de = sum(d,20,30);
// console.log("Output3 : " + de);




// var f = function (t){
//     console.log(t);
// }

// f("Test");
// f(true);
// f(new Date());

/////////////////////////////////////////////////////////

// function Main(c){
//     if(c==1){
//         return function(){
//             console.log("Value is 1 ")
//         }
//     }
//     if(c==2){
//         return function(){
//             console.log("Value is 2 ")
//         }
//     }
// }

// var f = Main(2);
// var r = f();
// console.log("Result is : " + r ) ;

/////////////////////////////////////////////////////////

// var obj = new Object();
// var obj1 = {};

// obj.ID = 1;
// obj.Name = "Zain";
// obj.Age = 22;

// obj.show = function(){
//     console.log("ID : " + this.ID);
//     console.log("Name : " + this.Name);
//     console.log("Age : " + this.Age);
//     console.log("Address : " + this.Address);
// }

// var obj1 = { 
//     ID :1,
//     Name:"Bilal",
//     Age:30,
//     show:function(){
//         console.log("ID : " + this.ID);
//         console.log("Name : " + this.Name);
//         console.log("Age : " + this.Age);
//     }
// }
// // obj.show();
// // obj1.show();    

// obj["Address"] = "Lahore"

// // obj["show"]();

// // console.log("---------------------------------------")
// // for(var k in obj){
// //   console.log("key is : " + k )
// //   console.log("Value is : " + obj[k]);
// // }


// // Converting to JSON
// var s = JSON.stringify(obj);
// console.log(s);


// // Converting from JSON Back to an object
// var o = JSON.parse(s);
// console.log(o);

/////////////////////////////////////////////////////////

// Java Script in Browser

// var a = confirm("Do you want to cancel ?");
// if(a){
//     console.log("User pressed Yes");
// }else{
//     console.log("User pressed No");
// }


// var a = prompt("Enter some value");
// console.log("Entered Value is : " + a );

// var a = parseInt("23a122b2c9");
// console.log(a);

// var f = parseFloat("23.21.123.23");
// console.log(f);

// var d = Number("23a");
// console.log(d)

document.write("TEst is here")
console.log("TEst is here")