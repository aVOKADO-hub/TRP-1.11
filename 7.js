array=[
    [22,-1,0,43,57],
    [-33,10,5,4,8],
    [3,-1,-44,44,87],
    [4,-331,0,18,4],
    [6,-31,9,77,4]
]
matrix=(arr)=>{
    column=0
    for (let i = 0; i < arr.length; i++) {
        if(i==column){
            if(arr[i][column]<0){
                array[i][column]=0
            }else{
                array[i][column]=1
            }
            
            column++
        }
    }
    return arr
}
console.log(matrix(array))