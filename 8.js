array=[1,1,1,1,1]
calculate=(array)=>{
    count=0
    array.forEach(element => {
        count+=element
    });
    return count/array.length;
}
console.log(calculate(array))