const f1promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("FRD1:Goa is on!!!!")
        }else{
            reject("sorry111!!,i will join next time,this time u all go")
        }


    },3000)

})
const f2promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("FRD22:Goa is on!!!!,let goooooo")
        }else{
            reject("sorry222!!,i will join next time,this time u all go")
        }


    },4000)

})
const f3promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("FRD33:Goa is on!!!!,party in on")
        }else{
            reject("sorry3333!!,i will join next time,this time u all go")
        }


    },5000)

})

Promise.all([f1promise,f2promise,f3promise]).then((msg)=>{
    console.log(msg)
    console.log("Yay we are going Goa!!!")
}).catch((msg)=>{
    console.log(msg)
    console.log("Plans r always made to fail ")
})


/**
 * 🌐 Example: Fetching Users from an API
 *
 * fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // converting response to JSON
  .then((data) => {
    console.log("User data:", data); // Success
  })
  .catch((error) => {
    console.log("Something went wrong:", error); // Failure
  });

 */

/**
 * 🌐 Example: Using async/await
 * 
 * async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // convert response to JSON
    console.log("User data:", data);    // Success
  } catch (error) {
    console.log("Something went wrong:", error); // Failure
  }
}

getUsers(); // Call the function

 */