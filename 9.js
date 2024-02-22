array=["world",3,2,1,"hello"]
revert=(array)=>{
    new_array=[array[array.length-1]]
    for (let i = array.length-2; i>=0; i--) {
        if(typeof array[i]=== "number"){
            new_array.push(Math.pow(array[i],2))
        }else{
            new_array.push(array[i])
        }
    }
    return new_array
}
console.log(revert(array))