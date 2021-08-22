function bass(){
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
}

function snare(){
    var audio=new Audio("./sounds/snare.mp3");
    audio.play();
}

function crash(){
    var audio=new Audio("./sounds/crash.mp3");
    audio.play();
}

function tom1(){
    var audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
}

function tom2(){
    var audio=new Audio("./sounds/tom-2.mp3");
    audio.play();
}

function tom3(){
    var audio=new Audio("./sounds/tom-3.mp3");
    audio.play();
}

function tom4(){
    var audio=new Audio("./sounds/tom-4.mp3");
    audio.play();
}

document.addEventListener("keydown",function(event){
    switch(event.key){
        case 'w':bass()
                    break;
        case 'a':tom1()
                    break;
        case 's':tom2()
                    break;
        case 'd':tom3()
                    break;
        case 'j':tom4()
                    break;
        case 'k':snare()
                    break
        case 'l': crash()
    }

    document.querySelector("."+event.key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+event.key).classList.remove("pressed")
        },100)
    
})

