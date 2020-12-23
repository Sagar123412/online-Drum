//idetifying which button has pressed

var buttonsLength = document.getElementsByClassName("drum").length;
for(var i =0; i<buttonsLength; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
        
        var buttoninnHTML = this.innerHTML;
        makeSound(buttoninnHTML);
        buttonAnimation(buttoninnHTML);
        
    });
}

//developing functions to play drum through keyboard
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//playing sound accourding to the innerHTML and instrument
function makeSound(key){
    switch(key){
        case"w":
            var tom1Music = new Audio("sounds/tom-1.mp3");
            tom1Music.play();
            break;
        case"a":
            var tom1Music = new Audio("sounds/tom-2.mp3");
            tom1Music.play();
            break;
        case"s":
            var tom1Music = new Audio("sounds/tom-3.mp3");
            tom1Music.play();
            break;
        case"d":
            var tom1Music = new Audio("sounds/tom-4.mp3");
            tom1Music.play();
            break;
        case"j":
            var tom1Music = new Audio("sounds/crash.mp3");
            tom1Music.play();
            break;
        case"k":
            var tom1Music = new Audio("sounds/kick-bass.mp3");
            tom1Music.play();
            break;
        case"l":
            var tom1Music = new Audio("sounds/snare.mp3");
            tom1Music.play();
            break;
        default:
            console.log(key);
    }
}
// adding animation to buttons when pressed

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //we don't want permanent animation It should be removed after a while
    //so setting up a timeout function
    //so to do that we have to remove the class that we have added to add animation 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}