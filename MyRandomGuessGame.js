// JavaScript File

<html lang="en">
<head>
     <meta charset='UTF-8'>
     <title>Random Number game</title>
</head>
<body>
 var x = Math.floor((Math.random() * 10) + 1);
         function checkguess 
    <script>
    var randomNumber = getRandomNumber(10);
    var guess;
    var guessCount = 0;
    var guessCount = false;
    
    function getRandomNumber(upper){
        var num = Math.floor(Math.random()*upper) + 1;
        return num;
    }
    while(true){
        guess = prompt('I am thinking of a number between 1 and 10. what is it?'
        );
        guessCount += 1;
        if (parseInt(guess) === randomNumber){
            correctGuess = true;
            break;
        }
    }
    document.write('<h1>You guessed the number!</h1>');
    document.write('it took you' + guessCount + 'tries to guess the number' + 
    randomNumber);
    
    </script>
</body>
</html>