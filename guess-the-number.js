let number = Math.floor((Math.random()*100)+1)
let i=1
while(i<100)
{
  let guess_number = prompt("Guess the number")

if(number==guess_number)
{
  console.log("you guess the number is correct.", "Your score is",100-i)
  
}
else if (number<guess_number)
{
  console.log("Guessed number is greater than the actual number")
}
else {
  console.log("Guessed number is lesser than the actual number")
}
i++
}
