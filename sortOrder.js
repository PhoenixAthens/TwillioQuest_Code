const array=[];
array.push(process.argv[2]);
array.push(process.argv[3]);
if(array[0].toUpperCase()<array[1].toUpperCase()){
    console.log(-1);
}else if(array[0].toUpperCase()>array[1].toUpperCase()){
    console.log(1);
}else{
    console.log(0);
}