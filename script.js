// Magic 8 Ball Assignment

// Variables for HTML Elements
let magicBallEl = document.getElementById("magicBall");
let queInputEl = document.getElementById("queInput");
let ansInputEl = document.getElementById("ansInput");

// Add Event Listener
magicBallEl.addEventListener("click", responseOut);

// Case Insensitive
let queIn = queInputEl.value.toLowerCase();

// Event Functions
function responseOut() {

    let randomAns = Math.random();
    alert(queIn);
    // ansInputEl.innerHTML
    if (queIn.innerHTML === "Does a magic 8 ball actually work?" || queIn.innerHTML === "Does a magic 8 ball actually work") {
        ansInputEl.innerHTML = "How dare you doubt me!";
    } else if (queIn.innerHTML === "Is JavaScript awesome?" || queIn.innerHTML === "Is JavaScript awesome") {
        ansInputEl.innerHTML = "Of Course!";
    } else if (queIn.innerHTML === null) {
        ansInputEl.innerHTML = "Please ask a question...";
    } else {
        if (randomAns < 0.2) {
            ansInputEl.innerHTML = "Without a Doubt.";
        } else if (randomAns < 0.4) {
            ansInputEl.innerHTML = "As I see it, yes.";
        } else if (randomAns < 0.6) {
            ansInputEl.innerHTML = "Concentrate and ask again.";
        } else if (randomAns < 0.8) {
            ansInputEl.innerHTML = "Don't count on it.";
        } else {
            ansInputEl.innerHTML = "Outlook not so good.";
        }
    }
}

// Trial for output for random answers.
// function randomAns() {
//     if (randomAns < 0.2) {
//         ansInputEl.innerHTML = "Without a Doubt.";
//     } else if (randomAns < 0.4) {
//         ansInputEl.innerHTML = "As I see it, yes.";
//     } else if (randomAns < 0.6) {
//         ansInputEl.innerHTML = "Concentrate and ask again.";
//     } else if (randomAns < 0.8) {
//         ansInputEl.innerHTML = "Don't count on it.";
//     } else {
//         ansInputEl.innerHTML = "Outlook not so good.";
//     }
// }