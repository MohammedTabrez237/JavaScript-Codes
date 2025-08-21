// User.greeting=function(){
//     console.log(`Asslamulikum js user, ${this.name}`)
// }

// console.log(User.greeting)
// console.log(User.greeting())


function greet(){
    console.log("Assalamulikum Akhi")
}
greet()

function sum(a,b){
    return a+b;
}
console.log(sum(9,7));

function fuc(){
    console.log(arguments)
}

fuc(4,5,2,5234)