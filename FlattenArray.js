function flattenArray(array){
    if(array.length===0){
        return "Pure Ducktypium!";
    }else{
        let resultant=[];
        array.forEach(x=>{
            if(typeof(x)==="object"){
                let tempo=flattenArray(x);
                tempo.forEach(a=>{
                    resultant.push(a);
                })
            }else{
                resultant.push(x);
            }
        });
        return resultant;
    }
}
console.log(flattenArray(["python", ["javascript", ["api", ["messaging"]]]]));