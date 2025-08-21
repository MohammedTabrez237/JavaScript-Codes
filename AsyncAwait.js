// async function getmsg(){
//     return "Assalamulikum Akhi"
// }

// console.log(getmsg())
// getmsg().then(result=>console.log(result))


/**
 * print hello after a wait 
 */

/** function printHelloAfterWait(){
    
    console.log('First Line')
    setTimeout(()=>{
        console.log("Hello Students")
    },3000)
    console.log('Last Line')
}
    
printHelloAfterWait()

**/
console.log("hello from beginning")

async function printHelloAfterWait(){
    
    console.log('First Line')
    let data =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Students")
        },3000)
    })

    let result = await data   //start waiting for data promise to be completed

    console.log(result)

    console.log('Last Line')
}

printHelloAfterWait()

console.log("hello from end")

