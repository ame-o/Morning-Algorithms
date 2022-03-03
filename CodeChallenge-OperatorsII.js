//Create a func that takes the number of pieces of cake./pizza and number of people
//Need to name func as howMuchLeftoverPizza.
//Number of pieces of pizza gets divided by number of people and we need the remainder.

function howMuchLeftoverPizza(numberOfPiecesofPizza, numberOfPeople){
    var remainder = numberOfPiecesofPizza%numberOfPeople;
    console.log(remainder);
}
howMuchLeftoverPizza(12,5);
var pieces = 5
var people = 3
//howMuchLeftoverPizza(pieces,people);

// Need to have 4 responses for 4 different remainder/scenarios.
// "No Leftovers for you!" = 0
// "You have some leftovers" = 1-2 slices
// "You have leftovers to share" = 3-5 slices
// "Hold another party" = 5 <= slices

//Option 1:
function howMuchLeftoverPizza2(numberOfPiecesofPizza, numberOfPeople){
    var remainder = numberOfPiecesofPizza%numberOfPeople;
    if(remainder === 0){
        console.log("No Leftovers for you!");
    }
    else if(remainder ==1 || remainder ==2){
        console.log("You have some leftovers");
    }
    else if(remainder >= 3 && remainder <= 5){
        console.log("You have leftovers to share");
    }
    else {
        console.log("Hold another party");
    }
}
howMuchLeftoverPizza2(12,5);


//Option2:   ****INCOMPLETE***
function leftoversFeature2 (numberOfPiecesofPizza,numberOfPeople){
    howMuchLeftoverPizza(numberOfPiecesofPizza,numberOfPeople);

}
