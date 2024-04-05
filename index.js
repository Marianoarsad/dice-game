/* player 1 */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var imageSource1 = "./images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", imageSource1);

/* player 2 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";
var imageSource2 = "./images/" + randomDiceImage;

document.querySelector(".img2").setAttribute("src", imageSource2);

/* Winner */
if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber1) {
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
