
// Detecting Mouse Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

     var buttonInnerHTML = this.innerHTML;
     makeNoise(buttonInnerHTML);

     buttonAnimation(buttonInnerHTML) 
     
    });
}


// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
   
    makeNoise(event.key);

    buttonAnimation(event.key);

});

function makeNoise(key) {

    switch (key) {
        case "m":
          var tom1 = new Audio("Sounds/trim.mp3");
          tom1.play();
        break;

        case "h":
          var tom2 = new Audio("Sounds/Ijustgothere.mp3");
          tom2.play();
        break;

        case "o":
          var tom2 = new Audio("Sounds/MannyPacman.mp3");
          tom2.play();
        break;

        case "l":
          var tom2 = new Audio("Sounds/uncleben.mp3");
          tom2.play();
        break;
        
        case "k":
          var tom2 = new Audio("Sounds/deeznuts.mp3");
          tom2.play();
        break;

        case "z":
          var tom2 = new Audio("Sounds/beetlejuice.mp3");
          tom2.play();
        break;


        default: console.log();
      }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (function() {
    activeButton.classList.remove("pressed");
  }, 100);
  
}