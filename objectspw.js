const user ={
    name:"Tab",
    age:20,
    city:"Bang",
}

console.log(user.name)
console.log(user['name'])


//changing ojb values
user.name = "Mohammed_Tabrez"
console.log(user["name"])

// add data 
user.Country="India"
user["continent"]="Asia"

console.log(user)

// delete the data from obj 
delete user.continent
console.log(user)


const regularUser={
    emailId:"zayn@gmail.com",
    phno:987654877,
    fullname:{
        username:{
            firstName:"Mohd",
            lastName:"zayn",
        }
    }
}
//  it displays key pair
for (let key in regularUser){
    console.log(key)
}
// it displays both key:pair 
console.log("it displays key:pair")
for (let key in regularUser){
    // console.log(key,"=>",regularUser[key])
    console.log(key, regularUser[key])
}

console.log(Object.keys(regularUser)) 
console.log(Object.values(regularUser)) 

console.log("HIIIIIIIIIIIIIIIII")
// get bith keys and values 
console.log(Object.entries(regularUser))
// console.log(regularUser.fullname.username.firstName)
console.log(regularUser.fullname.username) 

// Cloning an object using assign

// const new_regularUser=Object.assign({},regularUser)
const new_regularUser=Object.assign({},regularUser,{connect:"facebook"})
console.log(new_regularUser)