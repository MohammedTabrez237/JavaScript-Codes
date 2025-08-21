
/**
 * FOR EACH method (it is a higher order function)
 */

players =["Virat","A.B","Rohit","Siraj","Tabrez"]
players.forEach((player )=>console.log(player))


/**
 * MAP -> HELPS IN CREATION OF NEW TRANSFORM ARRAY
 * it also a higher order function
 */

let arr2 =[1,2,3,4,5,6]

let cube_arr=arr2.map(num=>num**3)
console.log(cube_arr)

/**
 * FILTER  (HOF)
 */

let arr1=[1,2,3,4,5,6,7,8,9,10,11]
     
let evenarr =arr1.filter((num)=>num%2==0)
console.log(evenarr)

/**
 * FIND
 */

let arr = [8,9,6,556,34]

let fin = arr.find(num=>num==556)
console.log(fin)



/**
 * REDUCE (HOF)
 */
 
// const sum=[34,65,23,76,12,76].reduce((curr,next)=>curr+next)
const sum=[34,65,23,76,12,76]
let sum1 = sum.reduce((curr,next)=>curr+next)
console.log(sum1)