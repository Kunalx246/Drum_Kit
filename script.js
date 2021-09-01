function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


document.addEventListener("keydown",function(event){
    switch(event.key){
        case 'w': playSound('kick-bass')
                    break;
        case 'a': playSound('tom-1')
                    break;
        case 's': playSound('tom-2')
                    break;
        case 'd': playSound('tom-3')
                    break;
        case 'j': playSound('tom-4')
                    break;
        case 'k': playSound('snare')
                    break
        case 'l': playSound('crash')
    }

    document.querySelector("."+event.key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+event.key).classList.remove("pressed")
        },100)
    
})

