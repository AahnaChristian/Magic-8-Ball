// Magic 8 Ball Assignment

// Variables for HTML Elements
let magicBallEl = document.getElementById("magicBall");
let queInputEl = document.getElementById("queInput").innerHTML;
let ansInputEl = document.getElementById("ansInput");

// Add Event Listener
magicBallEl.addEventListener("click", responseOut);

// Event Functions
function responseOut() {
    // Case Insensitive
    let queIn = queInputEl.value.toLowerCase();

    // Set responses to specific questions
    if (queIn === "Does a magic 8 ball actully work?") {
        ansInputEl.innerHTML = "How dare you doubt me!";
    } else if (queIn === "Is JavaScript awesome?") {
        ansInputEl.innerHTML = "Of Course!";
    } else if (queIn === "Is Visual Studio Code good to use?") {
        ansInputEl.innerHTML = "Yes, Of Course it is!!";
    } else if (queIn === undefined) {
        ansInputEl.innerHTML = "Please ask a question...";
    } else {
        // Probability
         let randomAns = Math.random();
    
         // Probabilities for the different answers
         if (queIn !== undefined && randomAns < 0.2) {
             ansInputEl.innerHTML = "Without a Doubt.";
         } else if (queIn !== undefined && randomAns < 0.4) {
             ansInputEl.innerHTML = "As I see it, yes.";
         } else if (queIn !== undefined && randomAns < 0.6) {
             ansInputEl.innerHTML = "Concentrate and ask again.";
         } else if (queIn !== undefined && randomAns < 0.8) {
             ansInputEl.innerHTML = "Don't count on it.";
         } else if (queIn !== undefined && randomAns < 1) {
             ansInputEl.innerHTML = "Outlook not so good.";
         } else if (queIn === undefined){
            ansInputEl.innerHTML = "Please ask a question...";
         }
    }
}
