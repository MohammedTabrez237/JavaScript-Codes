const gf1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
        resolve("GF1 : Hey I'll come for dinner")
        }else{
        reject("GF1 : I am on diet !")
        }   
    },1000)
})
const gf2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
        resolve("GF2 : Hey I'll come for dinner")
        }else{
        reject("GF2 : I am on diet !")
        }   
    },1000)
})
const gf3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
        resolve("GF3 : Hey I'll come for dinner")
        }else{
        reject("GF3 : My firends are coming !")
        }
    },1000)
})

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((result)=>{
    console.log(result)
    console.log("My valentine day is sorted")
}).catch(msg =>{
    console.log(msg)
    console.log("I am going to join Halal wrld ?")
})

