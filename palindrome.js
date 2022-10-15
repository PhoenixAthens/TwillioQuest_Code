function isPalindrome(string){
    if(string.length===0 || string.length===1){
        return true;
    }else{
        let entryString=string.toLowerCase();
        let submit;
        if(entryString.includes(" ")){
            submit=entryString.split(" ");
            submit=submit.join("");
        }else{
            submit=entryString;
        }
        let tempArray=Array.from(submit);
        for(let i=0;i<tempArray.length/2;i++){
            let temp=tempArray[i];
            tempArray[i]=tempArray[tempArray.length-1-i];
            tempArray[tempArray.length-1-i]=temp;
        }
        let result=tempArray.join("");
        if(result===submit){
            return true;
        }
        return false;
    }
}
console.log(isPalindrome("Never odd or even"));
let name="Maharaja rana pratap";
console.log(name.replaceAll(" ",""));