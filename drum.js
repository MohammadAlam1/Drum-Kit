// single button (first)

// let btn = document.querySelector("button");
// console.log(btn)
// btn.addEventListener("click", function () {
//   console.log("you clicked");
// });

// sb btn ke liye aur addEventListener ke liye.
// or Dectecting Button Press.
var eachButton = document.querySelectorAll(".drum");
console.log(`shown element which has same className .drum ↓: `);
console.log(eachButton);

var numberOfButton = eachButton.length;
console.log(
  "Total number which has same className .drum:" + " " + numberOfButton
);

for (var i = 0; i < numberOfButton; i++) {
  eachButton[i].addEventListener("click", function () {
    var buttonInnerMTML = this.innerHTML;
    makeSound(buttonInnerMTML);
    buttonAnimation(buttonInnerMTML);
    console.log(this);
  });
}

// Detectiong Keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick1 = new Audio("sounds/kick-bass.mp3");
      kick1.play();
      break;

    default:
  }
}

//ButtonAnimation
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.className.add("pressed");

  setTimeout(function () {
    activeButton.className.remove("pressed");
  }, 100);
}
