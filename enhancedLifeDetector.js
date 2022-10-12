const arg=process.argv[2];
if(arg==0){
    console.log("alive");
}else if(arg==1){
    console.log("flowering");
}else if(arg==2){
    console.log("shedding");
}else{
    console.log("other");
}