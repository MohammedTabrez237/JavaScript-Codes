

// ARROW Functions

// Functions with no argument and no return

var greet = () => console.log("Assalamulikum Akhi") 

greet()

// funt with parameters and return


// var sum = (a,b)=> console.log(a+b)

// sum(9,67)
var sum = (a,b)=> a+b
console.log(sum(9,90))

// fn with parameters,multiple lines in fn body 
 
var process = (a,b) =>{
    console.log("need to process");
    return a*b
}

console.log(process(5,4))

// IIFE (IMMEDIATELY INVOKED Function Expression)

(function(){
    console.log("hellowrld")
})()