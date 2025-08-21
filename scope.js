// Scope : act different at different situations or conditions
// scope
//  1) Var 2) Function 3)Obje  
// types of scopes
// Global scope 

// LOCAL SCOPE 
// Functions
// block

// global
var name = "Tabrez";

console.log(name)

function nam(){
    console.log(name)
}
nam()

// local scope or func scope variable


function functi(){
    var num = 44;
    console.log(num)
}
functi()
console.log(num)

// Block scope
{
    let x= 58
    console.log(x)
} 
console.log(x)




