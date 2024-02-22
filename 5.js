checkPositive=(n)=>{
    if(n>=0){
        console.log(`the number ${n} is positive`)
    }else{
        console.log(`the number ${n} is negative`) 
    }
}
checkPrime=(n)=>{
    if (n <= 1) {
        return'The number '+n+' is not a prime number'
    }
    if (n <= 3) {
        return `$The number ${n} is a prime number`
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return'The number '+n+' is not a prime number'
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return'The number '+n+' is not a prime number'
        }
        i += 6;
    }
    return `$The number ${n} is a prime number`
}

checkRemains=(n)=>{
    array=[2,5,3,6,9]
    counter=1
    for (let i = 0; i < array.length; i++) {
        if(n%array[i]==0){
            counter++
        }
    }
    if(counter==array.length){
        console.log(`${n} is divided by ${array} without remains`)
    }else{
        console.log(`${n} is divided by ${array} with remains`)
    }
}
checkNumber=(n)=>{
    checkPositive(n)
    console.log(checkPrime(n))
    checkRemains(n)
}
checkNumber(20)