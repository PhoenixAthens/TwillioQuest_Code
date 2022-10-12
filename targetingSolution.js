class TargetingSolution{
    x;
    y;
    z;
    constructor(objLiteral){
        this.x=objLiteral.x;
        this.y=objLiteral.y;
        this.z=objLiteral.z;
    }
    target(){
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}
const tar=new TargetingSolution({x:23,y:26,z:100});
console.log(tar.target());