

function scan(array){
    let encounter=0;
    array.forEach(x=>{
        if(x==="contraband"){
            encounter++;
        }
    });
    return encounter;
}

    
//console.log(scan(['joke','bat','contraband','fisk','matt','contraband']));
console.log(scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']))