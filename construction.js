function construct(name,material="human",assemble=true,duration=1000){
    let Person={
        name:name,
        material:material,
        assemble:assemble,
        duration:duration
    }
    return Person;
}
const b=construct('Kevin');
console.log(b.name);
console.log(b.duration);