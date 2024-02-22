add=(x,y)=>{
    if(x!=undefined&&y!=undefined){
        return x+y
    }
    else{
        return "You need to enter 2 argumets"
    }
}
sub=(x,y)=>{
    if(x!=undefined&&y!=undefined){
        return x-y
    }
    else{
        return "You need to enter 2 argumets"
    }
}
mul=(x,y)=>{
    if(x!=undefined&&y!=undefined){
        return x*y
    }
    else{
        return "You need to enter 2 argumets"
    }
}
dil=(x,y)=>{
    if(x!=undefined&&y!=undefined){
        return y!=0?x/y:"Error to dil by zero";
    }
    else{
        return "You need to enter 2 argumets"
    }
}
calc=(x,y,funcToCalc)=>{
    return funcToCalc(x,y)
}
console.log(calc(2,1,dil))