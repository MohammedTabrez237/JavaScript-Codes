
/** 
 * var :
 * 1. it is used to define a variable
 * 2. it has function scope not bloack scope
 * 3. it is hosted 
 */
 function f1(){
    var i =5
    console.log(i)
 }
 f1()
 console.log(i)

 {
    var i= 5;
 }
 console.log(i)

//  hosted
 console.log(j)
 var j =45;


 /**
  * ho hoisting
  * it also has block scope
  * 
  */

//  no hoisting
 console.log(k)
 let k =45;

//  has block scope 
 {
   let name="tommy"; 
 }
 console.log(name)