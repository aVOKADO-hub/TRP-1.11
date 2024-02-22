createArr=(n)=>{
    arr=[]
    counter=0
    while(n-counter>0){
        arr.push(n-counter)
        counter++
    }
    return arr
}
console.log(createArr(5))