// JavaScript File
 // var random = Math.floor((Math.random() * 100) + 1); GENERATES RANDOM NUMBER
{
 function getRandomNumber(upper) 
          var random = Math.floor((Math.random() * 100) + 1);
          number = Math.round(random);
}
//Allows user to guess        
round = Math.round(random);
number = round;
function guessing()
{
// functions used to generate if guess is to high or low
var guess = document.getElementById('guess').value;
var guessed = '';

    if(guess < number)
    {
        document.getElementById('highlow').innerHTML = "Higher" + number;
    }
    else if (guess > number)
    {
        document.getElementById('highlow').innerHTML = "Lower";
    }
    else
    {
        document.getElementById('correct').innerHTML = "Correct, The number was: " + number;
    }   

        document.getElementById('show').onclick = function()
        {
            document.getElementById('showNumber').innerHTML = "The number was: " + number;  
        };
// return guess outcome
    guessed += guess ;
    document.getElementById('showGuessed').innerHTML += "  " + guess + "  ";
}
    // var number = round;
    // leave the rest
   {
    var guess = document.getElementById('guess').value
