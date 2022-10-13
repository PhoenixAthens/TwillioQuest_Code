
function differenceMinMax(array){
    if(array.length==0){
        return 0;
    }else{
        let max=array[0];
        let min=array[0];
        let arr=[1,2,3];
        array.forEach(x=>{
            if(x>max){
                max=x;
            }
        })
        array.forEach(x=>{
            if(x<min){
                min=x;
            }
        })
        return max-min;
    }
}
console.log("Test case 1:");
console.log(differenceMinMax([1, 2, 3, 4, 5]));
