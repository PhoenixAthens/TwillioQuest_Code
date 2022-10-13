function sumArray(numbers){
    if(numbers.length==0){
        return 0;
    }else{
        let sum=0;
        numbers.forEach(x=>{
            sum+=x;
        })
        return sum;
    }
}