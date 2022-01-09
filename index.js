document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("error");
            break;
    }
    changeStyle(event);
});

// one way to understand which button is clicked
// document.addEventListener("click", function (event) {
//     var element = event.target;
//     alert(element.innerHTML);
// });

// the other way is creating event listener for each button with for loop
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        if (i == 0 || i == 1 || i == 2 || i == 3) {
            var audio = new Audio("sounds/tom-" + (i + 1) + ".mp3");
            audio.play();
        } else if (i == 4) {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        } else if (i == 5) {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        } else if (i == 6) {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        changeStyle(event);
    });
}

function changeStyle(event) {
    if (event.type == "keydown") {
        var obj = document.querySelector("." + event.key);
        obj.classList.add("pressed")
        setTimeout(() => obj.classList.remove("pressed"), 100);
    } else {
        // mouse click
        // event.type = "click"
        var obj = document.querySelector("." + event.target.innerHTML);
        obj.classList.add("pressed")
        setTimeout(() => obj.classList.remove("pressed"), 100);
    }
}