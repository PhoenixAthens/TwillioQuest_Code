//This remove duplicator removes the consecutive duplicates
function removeDuplicateCharacters(string) {
    let array=Array.from(string);
    for(let i=0;i<array.length-1;i++){
      if(array[i+1]===array[i]){
        array[i]=0;
        
      }
    }
    let result=[]
    array.forEach(x=>{
      if(x!==0){
          result.push(x);
      }
    });
    return result.join("");
    
  }
  console.log(removeDuplicateCharacters("abba"));
  //outcome:: aba