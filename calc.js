function displayNum(num){
    // document.also
    result.value+=num
}
function evaluateExpr(){
    // expr=result.value
    // op=eval(expr)
    // result.value=op
    result.value=eval(result.value)
}

function allClear(){
    result.value=""
}

function allClear(){
    result.value=""
}

function backSpace(){
    // slice(0,-1)used to elemenate last element,-2 last two elemt
    result.value=result.value.slice(0,-1)
}