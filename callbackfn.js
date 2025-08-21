function greet(name,callback){
    const greeting="Assalamulikum"+name
    callback(greeting)
}

function displaygreet(message){
    console.log(message)
}

greet("Tabrez",displaygreet)