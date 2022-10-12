function getFirstAmountSorted(array,number){
    array.sort();
    let newArray=[];
    if(number>array.length){
        for(let i=0;i<array.length;i++){
            newArray.push(array[i]);
        }
    }else{
        for(let i=0;i<number;i++){
            newArray.push(array[i]);
        }
    
    }
    return newArray;
}
console.log(getFirstAmountSorted(['bird','dog','cat','ant'],2));