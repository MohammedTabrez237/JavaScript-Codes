try{
    let obj=undefined
    /**     or
    let obj={
        name:"Tab"
    }
    */
    console.log(obj.name)

}catch(err){
    console.log("exception handled")
    // console.log(err)
}finally{
    console.log("program executed")
}