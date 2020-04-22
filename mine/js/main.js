'use strick'
var marks = 0;

confirm("How about we play a fun guessing name about myself?");

if(confirm){
    
    
    favColor();
   
    yearBorn();

    inAr();

    friend();



    bornMonth();

    notAColor();

    alertResult();


    askForName();

    
}

function notAColor(){
    var colorsIlike = ['black', 'gray', 'white', 'red'];
    var right = false;
    for(var i = 1; i < 7; i++){
        var guess = prompt('guess the colors i like ');
        var lower = guess.toLowerCase();

        if(lower === 'black' || lower === 'gray' || lower === 'white' || lower == 'red'){
            right = true;
            marks++;
            alert('you got it right, my fav colors are (black, white, gray and red');
            break;
        } else {
            var remaining = 6 - i;
            alert('wrong answer you have ' + remaining + ' more time to try');

        }
    }

    if(!right){
        alert('unlucky, my fav colors are (black, white, gray and red');

    }
}

function bornMonth(){
    var counter = 0;
    var gotIt = false;
    while (counter < 5){
        var month = parseInt(prompt('guess the month i was born in'));
        if(month > 6 && month < 13){
            alert('high');
        }else if (month < 6 && month > 0){
            alert('low');
        }else if (month == 6){
            alert('yes yes');
            marks++;
            gotIt = true;
            break;
        }else if (month > 12 || month < 1){
            alert('are you joking??');
        }
        counter++;
    }
    if (!gotIt){
        alert('im gemini and its not that hard to guess. its june, i was born in june');
    }
    
}

function favColor(){
    var favColor = prompt("my favourite color is black??");
    if( favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y' ){
        alert('yes yes yes!!!!! its black');
        marks++;
    } else {
        alert('youre wrong... it has always been BLACK');
    }

}

function yearBorn(){
    var yearBorn = prompt("I was born in the 90s?");
    if( yearBorn.toLowerCase() === 'yes' || yearBorn.toLowerCase() === 'y' ){
        alert('yes yes yes!!!!! 90s :D');
        marks++;
    } else {
        alert('youre wrong i was actually born in the 90\'s');
    }

}


function inAr(){
    var inar = prompt("Am i in a relationship?");
    if( inar.toLowerCase() === 'yes' || inar.toLowerCase() === 'y' ){
        alert('yes and im happy:D');
        marks++;
    } else {
        alert('I am in a relationship sorry :D');
    }
}

function friend(){
    var friend = prompt("Are you a friend of mine?");
    if( friend.toLowerCase() === 'yes' || friend.toLowerCase() === 'y' ){
        alert('youre everything to me');
        marks++;
    } else {
        alert(':( :( :(');
    }
}


function alertResult(){
    alert('you got ' + marks + '/6');
}

function askForName(){
    var name = prompt("what is your name?");

   var content = document.getElementById('nameGoesHere').innerHTML = 'Welcome to my page ' + name;
    // content.textContent = ();
}

