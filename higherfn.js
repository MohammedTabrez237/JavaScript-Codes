// Higher order function 

// type1 : HOF in this function is used as Parameter 

function operation(opfunc,a,b){
    return opfunc(a,b)
}

function add(a,b){
    return a+b;
}

let reslt = operation(add,5,11)

console.log(reslt)


// type2 : HOF In this u go and return the hof 

function getgreetfn(){
    return function(){
        console.log("Assalamulikum Akhi")
    }
}


let ggreetfn = getgreetfn()  // here ggreetfn is of type function
console.log(typeof ggreetfn)
ggreetfn()
