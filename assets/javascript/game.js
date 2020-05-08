
// reset//
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");
let bothgoals = document.querySelector("#goals");






// team1//
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
let oneShootButton = document.querySelector("#teamone-shoot-button");

// team2//
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");
let twoShootButton = document.querySelector("#teamtwo-shoot-button");


// Team1//
    oneShootButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let newteamoneNumshotsValue = Number(teamonenumshots.innerHTML) + 1; 
    teamonenumshots.innerHTML = newteamoneNumshotsValue;

    console.log("+ button clicked");
    let newteamoneNumgoalsValue = Number(teamoneNumgoals.innerHTML) + 1; 
    
        let x = Math.floor(Math.random() * 10);
        if (x % 3 == 0) {
            x = Number(teamoneNumgoals.innerHTML) + 1; playAudio(GoalAudio);
            teamoneNumgoals.innerHTML = x
    }
    })
    
    

// Team2//
    twoShootButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let newteamtwoNumshotsValue = Number(teamtwoNumshots.innerHTML) + 1; 
    teamtwoNumshots.innerHTML = newteamtwoNumshotsValue;

    console.log("+ button clicked");
    let newteamtwoNumgoalsValue = Number(teamtwoNumgoals.innerHTML) + 1;
    
    let x = Math.floor(Math.random() * 10);
    if (x % 3.5 == 0) {
        x = Number(teamtwoNumgoals.innerHTML) + 1; playAudio(GoalAudio);
        teamtwoNumgoals.innerHTML = x

    
    }

})

// Reset//

    resetButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let newnumResetsValue = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = newnumResetsValue;
    
})
var GoalAudio = "assets/Audio/goal-audio.mp3"
resetButton.addEventListener("click", function () {
    let newnumResets = Number(numResets.innerHTML) + 1; 
    numResets.innerHTML = newnumResets;
    if (teamoneNumgoals.innerHTML > teamtwoNumgoals.innerHTML){
        alert("Congratulations!Argentina Win!");}
    if (teamtwoNumgoals.innerHTML>teamoneNumgoals.innerHTML){
        alert("Congratulations! Brazil Wins!");
    }
    teamoneNumgoals.innerText = '0';
    teamtwoNumgoals.innerText = '0';
    teamonenumshots.innerText = '0';
    teamtwoNumshots.innerText = '0';
})

function playAudio(url) {
    new Audio(url).play();
}