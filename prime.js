function prime(num){
  let factors=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      factors++;
    }
  }
  if(factors==2){
    console.log("Yes");
  }
  else{
    console.log("not a prime");
  }
}
prime(13);