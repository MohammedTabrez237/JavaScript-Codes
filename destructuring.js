/**
 * destructuring in arrays
 */

const num=[1,43,23]
const [a,b,c,d] =[1,43,23]
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// nested array 

const[p,q,r,s,t] = [12,34,45,[40,50]]
console.log(p)
console.log(q)
console.log(r)
console.log(s)

/**
 * destructuring in Object
 */

const per=  {
    name:"Tohid",
    age:19,
    gender:"m",
    
    address:{
        city:"Banglore",
        state:"kar",
    }
}

// const{name,age,hobby,address}=per
const{name,age,hobby,address:{city,state}}=per
console.log(name)
console.log(hobby)
console.log(city)
