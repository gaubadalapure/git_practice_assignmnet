function palindrome(str){
  let bag="";
  for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i];
  }
  if(bag==str){
    console.log("yes");
  }
  else{
    console.log("no");
  }
 
}
palindrome("rasie");