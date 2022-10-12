//This is basically a Set
function removeDuplicateChars(string){
    let array=Array.from(string);
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
                array[j]=0;
            }
        }
    }
    let result=[];
    array.forEach(x=>{
        if(x!==0){
            result.push(x);
        }
    });
    return result.join("");
}
console.log(removeDuplicateChars("aabbcc"));