let runAgain=true
  while(runAgain)
    {
      let a = prompt("enter your age")
if(a>=18)
{
  alert("you can drive")
}
else if(a<18 && a>0){
  alert("you cannot drive")
}
      else{
        console.error("enter a valid age")
        break;
      }
runAgain=confirm("do you want to see the prompt again")
    }