function balanceBrackets(array){
    const object={
        "{":"}",
        "(":")",
        "[":"]",
    };
    let tempArray=["{","(","["];
    let tempo=[];
    for(let i=0;i<array.length;i++){
        if(tempArray.includes(array[i],0)){
            tempo.push(array[i]);
        }else if(tempo.length!==0){
            if(object[tempo[tempo.length-1]]===array[i]){
                tempo.pop();
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    return !tempArray.includes(tempo[tempo.length - 1], 0);

}

/*function balanceBrackets(array) {
    for(let i=0;i<array.length;i++){
        if(array[i]!=null){
            if(tempArray.includes(array[i],0)){
                let flag=findClosingBracket(i+1,array[i],array)
                if(flag===false){
                    console.log(12);
                    return false;
                }
                /*else{
                    i++;
                }
            }else{
                console.log(13);
                return false;
            }
        }
    }
    return true;
}
function findClosingBracket(i,opener,array){
        if(array[i]===object[opener]){
            array[i]=null;
            return true;
        }else if(tempArray.includes(array[i],0)){
            return findClosingBracket(i+1,array[i],array);
        }else{
            console.log(14);
            return false;
        }
}
console.log(balanceBrackets(["(",")","[","(","{","}",")","]"]));*/
console.log(balanceBrackets(["(",")","[","]","{","}","{","[","(",")","]","}"]));