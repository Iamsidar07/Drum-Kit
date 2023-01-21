// annomus function bina naam k function
let button1 = document.querySelectorAll("button")[0];
button1.addEventListener("click", clickHandel);

function clickHandel() {
  // alert("btn is clicked");

  // this.style.color="white";

  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);

  //   switch (buttonInnerHTML) {
  //     case "w":
  //       var audio = new Audio("sounds/crash.mp3");
  //       audio.play();
  //       break;
  //     case "a":
  //       var audio = new Audio("sounds/snare.mp3");
  //       audio.play();

  //       break;
  //     case "s":
  //       var audio = new Audio("sounds/crash.mp3");
  //       audio.play();

  //       break;
  //     case "d":
  //       var audio = new Audio("sounds/tom-1.mp3");
  //       audio.play();

  //       break;
  //     case "j":
  //       var audio = new Audio("sounds/tom-2.mp3");
  //       audio.play();

  //       break;

  //     case "k":
  //       var audio = new Audio("sounds/tom-3.mp3");
  //       audio.play();
  //       break;
  //     case "l":
  //       var audio = new Audio("sounds/tom-4.mp3");
  //       audio.play();
  //       break;

  //     default:
  //       console.log(buttonInnerHTML);
  //       break;
  //   }
}

// let buttons=document.getElementsByClassName("drum"); //array of buttons
let buttons = document.querySelectorAll("button.drum"); //array of buttons

for (let button = 0; button < buttons.length; button++) {
  buttons[button].addEventListener("click", clickHandel);
}

// for (const button in buttons) {
//     if (Object.hasOwnProperty.call(buttons, button)) {
//         let drum = buttons[button];
//         drum.addEventListener("click",clickHandel);
//     }
// }

document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;
    case "s":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}

$("button").on("click", function () {
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").hide();
  // $("h1").show();
  //   fadeIn()
  // fadeOut()
  // fadeToggle()
  // fadeTo()

  // $("h1").fadeToggle();
  // $("h1").fadeTo();
  // $("h1").slideDown();
  // $("h1").slideUp();
  $("h1").slideToggle();
});
