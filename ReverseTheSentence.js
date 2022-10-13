//lowercse the original first word
//Put the words in reverse order.
//Capitalize the first letter of the new first word
//Don't modify the casing of any other words
//Leave the punctuation mark at the end of the sentence
function reverseSentence(sentence){
    if(sentence.length==0){
        return "";
    }
    let arr=sentence.split(" ");
    let punctuation=sentence[sentence.length-1];
    arr[0]=arr[0].toLowerCase();
    arr[arr.length-1]=arr[arr.length-1].replace(arr[arr.length-1][(arr[arr.length-1]).length-1],""); 
    arr=arr.reverse();
    let temp=Array.from(arr[0]);
    temp[0]=temp[0].toUpperCase();
    let finalWord=temp.join("");
    arr[0]=finalWord;    
    arr[arr.length-1]=arr[arr.length-1].concat(punctuation);
    return arr.join(" ");
}    
console.log(reverseSentence("I visited Ethiopia last year."));
//let arr=["hell","gell"];
//arr[1]=arr[1].replace(arr[1][2],";");
//console.log(arr);
//let work="work";
//work=work.charAt(0).toUpperCase();
//console.log(work);