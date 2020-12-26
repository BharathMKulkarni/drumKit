
// detecting if a button was clicked:
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // var text = document.querySelectorAll("button")[i].textContent;
        var text = this.textContent;  
        makeSound(text);
        buttonAnimation(text);
        
    });
}


// detecting a keyboard press:
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(key){
    var buttonPressed = document.querySelector("."+key);
    buttonPressed.classList.add("pressed");

    // adding delay to a function call:
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100);
}


function makeSound(text) {

    switch(text){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "a":
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play(); 
            break;

        case "s":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play(); 
            break;

        case "d":
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play(); 
            break;

        case "j":
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play(); 
            break;
        
        case "k":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play(); 
            break;
            
        case "l":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play(); 
            break;
    }
}

