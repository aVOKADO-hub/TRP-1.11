arr=[1,2,1]
checkArrLength=(arr)=>{
    diffNumber=undefined
    if(arr.length%2==0){
        return "Array length is even"
    }else{
        for(i=0; i<arr.length; i++){
            diffNumber=arr[0]
            if(diffNumber!=arr[i]){
                if(arr.indexOf(arr[i])!=arr.lastIndexOf(arr[i])&&arr.lastIndexOf(arr[i])>-1){
                    return diffNumber
                }
                return arr[i]
            }
        }
    }
}
console.log(checkArrLength(arr))