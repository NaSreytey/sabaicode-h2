//1.
// function hello(name){
//     return `hello ${name}`
// }
// console.log(hello("tey"))

//2.
// const sum=function(num1,num2){
//     return num1+num2;
// }
// console.log(sum(2,3))

//3.
 
//  let arrs=(array)=>{
//     let sum=0;
//   // step:1 sum all items in array
//     for(let i=0;i<array.length;i++){
//        sum+=array[i];
//     }
//     return sum/array.length;
//  }
// console.log(arrs([12,43,34]).toFixed(2));


//4.
// let  calculates =function(weight,height){
//     return weight / (height * height)

// }
// console.log(calculates(40,160));

//5.

// function filterObject(object){
//     let newArray=[]
//     object.forEach(element => {
//       if(element.quantity!=0)
//         newArray.push(element)
//     });
//     return newArray;
//   }
//   console.log(filterObject([ 
//     {name:"coca",price:1500,quantity:0},
//     {name:"sting",price:1500,quantity:2},
//     {name:"milk",price:2500,quantity:3},
//   ]))


//6.
 
// function checkPassword(password){
//     if(password.length>=8){
//        console.log("This is a storng password")
//     }else{
//         console.log("Passwors is not storng!!!")
//     }
// }
// checkPassword("232381")

//.7

// function vowel(vol){
//     let vowelConut=0
//     for(let i=0;i<vol.length;i++){
//         if(vol[i]==='a' || vol[i]==='e' || vol[i]==='i' || vol[i]==='o' || vol==='u'){
//            vowelConut++
//         }
//     }
//     return vowelConut;
// }
// let names="hii everyone";
// let showVowel=vowel(names);
// console.log(showVowel)

//8.

// function sortArray(arrays) {

//     for (let i = 0; i < arrays.length; i++) {   
//         for (let j = 0; j < arrays.length - i; j++) { 
//             if (arrays[j] > arrays[j + 1]) {
//                 let temp = arrays[j];
//                 arrays[j] = arrays[j + 1];
//                 arrays[j + 1] = temp;
//             }
//         }
//         return arrays;
//     }
// }
// let array = [5, 2, 9, 1, 5, 6];
// let sortedNumbers = sortArray(array);
// console.log("Sorted numbers :", sortedNumbers)

//9.


// function findMedian(array){
//     let median=0
//     sortArray(array)
//     let mid=Math.floor(array.length/2)
//     if(array.length%2==0){
//       median=(array[mid-1]+array[(mid)])/2
//     }
//     else{
//       median=array[mid]
  
//     }
//     return median
//   }
//   console.log("Media:",findMedian([2,1,5,7,6,5,6,4,1,3]))

  //.10

//   function factorial(number){
//     let fac=1
//     if(number>1){
//         for(let i=1;i<=number;i++){
//             fac*=i;   
//      }
//     }
//     return fac
//   }
//   console.log(factorial(5))