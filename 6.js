array=[1, 1, 3, 4, 4, 1, 3, 2] 
delDub=(array)=>{
    correctArray=[]
    for(let i =0;i<array.length;i++){
        if (correctArray.includes(array[i])){
            continue;
        }else{
            correctArray.push(array[i])
        }
    }
    return correctArray
}
console.log(delDub(array))