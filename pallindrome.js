let str="madam"

function reverse(string){
let bag="";
 for(let i= string.length-1; i>=0;i--){
      bag=bag+string[i];
       }
     return bag;
 }

let rev_str= reverse(str);

if(str==rev_str){
    console.log("Pallindrome");
   }else{
      console.log("NA);
}