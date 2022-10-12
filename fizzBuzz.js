const inputNumber=process.argv[2]
if(inputNumber%3==0 && inputNumber%5==0){
    console.log("JavaScript");
}else if(inputNumber%3==0){
    console.log("Java");
}else if(inputNumber%5==0){
    console.log("Script");
}else{
    console.log(inputNumber);
}