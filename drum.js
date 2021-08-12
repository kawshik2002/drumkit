var allbtn = document.querySelectorAll("button");
for (let btn of allbtn) {
    btn.addEventListener("click", buttonalt);

}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonani(event.key);
})



// for (let i = 0; i < allbtn.length; i++) {
//     allbtn[i].addEventListener("click", buttonalt);
// }
// addEventListener
// let i = 0
// while (i < allbtn.length) {
//     allbtn[i].addEventListener("click", buttonalt)
//     i++;
// }
// do {
//     allbtn[i].addEventListener("click", buttonalt)
//     i++;
// } while (i < allbtn.length)
function buttonalt() {
    var buttonintxt = this.innerText;
    makesound(buttonintxt);
    buttonani(buttonintxt);

}

function makesound(sound) {
    switch (sound) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(sound);
            break;
    }
}



function buttonani(value) {
    var buttonsvalue = document.querySelector("." + value);
    buttonsvalue.classList.add("pressed");


    setTimeout(() => {
        buttonsvalue.classList.remove("pressed");
    }, 100);
}