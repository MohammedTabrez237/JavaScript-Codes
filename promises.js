/**
 * PROMISES
 */

const SweetyPromise = new Promise((resolve,reject)=>{
    let parentdecision=false

    if(parentdecision){
        resolve("Yayy!,Jaan Nikah ki tayari karo abbu mann gaye")
    }else{
        reject("Abbu ne govt job wala dhund liya h,i think u deserve better")
    }
});

SweetyPromise.then((msg)=>{
    console.log("sweety msg: ",msg)
    console.log("jaan honeymoon k liye tickets kidr ke book ka ru")
}).catch((msg)=>{
    console.log("sweety msg: ",msg)
    console.log("mujhe kya mere pass or bahut options hai!!")
}).finally(()=>console.log("atleast i got clearity"))


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