function hello(){
    let name="Tabrez"
    console.log(name)
}

hello()

 //console.log(name)  // to recover from this prob closures r made

function outrfn(){
    let outrvar="i am from outer func"
    function innrfn(){
        console.log(outrvar)
    }
    return innrfn
}

let fn=outrfn()

fn()

function customercounter(){
    let count=0
    return function(){
        count++
        console.log("new customer count is",count)
    }
}

let counter = customercounter()

counter()
counter()
counter()
counter()
counter()