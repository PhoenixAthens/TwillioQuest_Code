function addFirstToLast(array){
    if(array.length!=0){
        return array[0]+array[array.length-1];
    }
    return ""    
}
console.log(addFirstToLast([]));