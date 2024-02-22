arr = [[3, 2, 1],[4, 6, 5],[],[9, 7, 8]]
sortArr=(arr)=>{
    arrSorted = []
    counter=0
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arrSorted.push(arr[i][j])
        counter++
    }
}
arrSorted=arrSorted.sort()
return arrSorted
}
console.log(sortArr(arr))