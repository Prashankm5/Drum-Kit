var buttons = document.querySelectorAll("button.drum");
for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function() {
        // var buttonInnerHtml = this.innerHTML;

        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);

        

    });  //This is the anonymous function.
}


document.addEventListener("keypress",function(event){
    // alert("The key was pressed!")
    // console.log(event)
    // var keyPressed = event.key;
    makesound(event.key);
    buttonAnimation(event.key);
    
})



function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        
        case 's':
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;

    
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    // document.querySelector("."+currentKey).classList.add("pressed");
    var ativeButton = document.querySelector("."+currentKey);

    ativeButton.classList.add("pressed");

    setTimeout(function(){
        ativeButton.classList.remove("pressed");
    },100)

}
