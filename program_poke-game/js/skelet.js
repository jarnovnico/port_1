/* Copyleft 2013 */
/*jslint browser: true*/
/*globals console*/

(function () {
    'use strict';

    // Helper functie om het boek te kunnen gebruiken
    var print = function () {
            var i = 0;
            for (i = 0; i < arguments.length; i = i + 1) {
                console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
            }
        };

    // Hier onder jouw code
    // ------------------------------

    //Het spel begint met een melding.
    alert ("A wild Squirtle appeard!");
    alert ("You choose Charmander!");

    //Er wordt gevraagd wat je eerste actie is aan de hand van een prompt.
    //Vervolgens gaat het antwoord samen met de string bij de alert.
    var userChoice = prompt("What attack do you want to do first: Tackle, Growl or Ember?");
    alert ("Charmander does " + userChoice);

    //Een variable computer choice wordt aangemaakt met een random generated number.
    //Dit wordt vervolgens met een if/else statement bepaald wat de uitkomsten zijn.
    var computerChoice = Math.random();
    if (computerChoice < 0.5) {
      computerChoice = "Watergun";
    } else {
      computerChoice = "Tail Whip";
    }

    //De random generated computer choice wordt in een alert verwerkt met een string.
    alert ("Foe Squirtle does " + computerChoice);

    //Er wordt een compare variable aangemaakt die de antwoorden gaat vergelijken met elkaar.
    //* Deze staat onder de if/else if statements. *
    //Dit wordt vervolgens met een if/else statement bepaald wat de uitkomsten zijn van die vergelijking.
    var compare = function (choice1, choice2) { 
        if (choice1 === choice2) {
            alert ("It's not very effective.");
        } else if (choice1 === "Tackle") {
            if (choice2 === "Tail Whip") {
                alert ("Charmander uses Tackle and wins! Wild Squirtle fainted!");
            } else if (choice2 === "Watergun") {
                alert ("It's super effective! Charmender fainted. You are defeated!");
            }
        } else if (choice1 === "Growl") {
            if (choice2 === "Watergun") {
                alert ("It's super effective! Charmander fainted. You are defeated!");
            } else if (choice2 === "Tail Whip") {
                alert ("It's not very effective.");
            }
        } else if (choice1 === "Ember") {
            if (choice2 === "Watergun") {
                alert ("It's super effective! Charmander fainted. You are defeated!");
            } else if (choice2 === "Tail Whip") {
                alert ("It's not very effective.");
            }
        }
    };

    //Het antwoord dat ingevuld is aan het begin wordt vergeleken met die van de random generated computer choice.
    compare(userChoice, computerChoice);

    //Bronvermelding:
    //Code geleerd via http://www.codecademy.com/dashboard
    //De code is deels overgenomen en zelf geschreven.

    //De afbeelding is afkomstig van: http://taime-n.deviantart.com/art/Charmander-Vs-Squirtle-203276109 & All credit goed to Taime-N

    // ------------------------------

// Sluiten van de scope functie
}());