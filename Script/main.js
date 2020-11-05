const playerEntryContainer = document.getElementById('player-entry');
const playerDropdown = document.getElementById('player-container');
const playerCount = document.getElementById('player-count');
const golfCourseSelector = document.getElementById('course-options');
const teeTypeSelector = document.getElementById('tee-type');
const holeTotal = document.getElementById('hole-total-selection');
const allForms = document.getElementsByClassName('form-control');
const submitButton = document.getElementById('submit');
const scorecardDiv = document.getElementById('scorecard');


console.log(allForms);

function optionsLogger() {
    golfCourseSelector.addEventListener('change', event => {
        const courseSelected = golfCourseSelector.value;
        console.log(`selected ${courseSelected}`)
    })
    teeTypeSelector.addEventListener('change', event => {
        let teeSelected = teeTypeSelector.value;
        console.log(`selected ${teeSelected}`)
    })
    holeTotal.addEventListener('change', event => {
        let numberOfHoles = holeTotal.value;
        console.log(`selected ${numberOfHoles}`)
    })
    playerCount.addEventListener('change', event => {
        let numberOfPlayers = playerCount.value;
        console.log(`selected ${numberOfPlayers}`)
    })
}

optionsLogger()

function allFieldsEntered() {
    submitButton.addEventListener('click', event => {
        for(let i = 0; i < allForms.length; i++) {
                if(allForms[i][0].selected) {
                    allForms[i].classList.add('is-invalid');
                    console.log('in if statement')
                    console.log(allForms[i][0]);
                } else {
                    console.log('go to new page function here')
                    allForms[i].classList.remove('is-invalid');
                }
        };
        //separate for loop to validate entries
    })
}
allFieldsEntered();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText);
        const courseList = JSON.parse(xhttp.responseText);
        console.log(courseList);
    }
};
xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
xhttp.send();


playerDropdown.addEventListener('change', event => {
    let totalPlayers = playerCount.value;
    const header = `<h4 class='d-flex flex-column align-items-center' aria-describedby="playerNameHeader">
    Enter the player names: 
    </h4>
    <small id="playerNameHeader" class="text-muted d-flex flex-column align-items-center">
    Names entered cannot match other players
  </small>
    `
    if (totalPlayers == 1) {
        playerEntryContainer.innerHTML = (header + createPlayerEntry());
    }
    if (totalPlayers == 2) {
        playerEntryContainer.innerHTML = (header + createPlayerEntry() + createPlayerEntry());
    }
    if (totalPlayers == 3) {
        playerEntryContainer.innerHTML = (header + createPlayerEntry() + createPlayerEntry() + createPlayerEntry());
    }
    if (totalPlayers == 4) {
        playerEntryContainer.innerHTML = (header + createPlayerEntry() + createPlayerEntry() + createPlayerEntry() + createPlayerEntry());
    }
});



function createPlayerEntry() {
    const playerTemplate = `
    <div class='container d-flex justify-content-center'>
        <div class='row'>
            <p class='col-3'> Player: <p>
            <input class='col-md' type="text" placeholder="Name">
        </div>
    </div> `
    return playerTemplate
}

//TO DO:
//Need to add function that uses the data in dataLogger to populate 
//scorecard with names, tee type, course info, etc
//Also need a function that verifies that all data has been entered:
//All options selected, names entered, no duplicate names
//If duplicate name, module stating names cannot be the same. 
//Templates for front 9 and back 9
//For full 18, have it just populate one below the other. 
//In template, could probably just use the 1-9 div as its own 
//template and then insert the name of the line separate? 


