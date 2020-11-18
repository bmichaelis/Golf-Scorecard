import { optionsSelected } from "./state.js"
import { courseData } from "./apiCalls.js"

$('#courseDropdown').change(function (event) {
    optionsSelected.courseOption = event.target.value;
    console.log(optionsSelected.courseOption)
    console.log(optionsSelected);
    createScorecard();
})

$('#teeTypeDropDown').change(function (event) {
    optionsSelected.teeOption = event.target.value;
    console.log(optionsSelected.teeOption)
    console.log(optionsSelected)
})
// $('.names').change(function (event) {
//     const namesClass = document.getElementsByClassName('names');
//     console.log(namesClass[0].value)
// })
$('#holesDropdown').change(function (event) {
    optionsSelected.numberOfHoles = event.target.value;
    console.log(optionsSelected.numberOfHoles)
    console.log(optionsSelected)
})
$('#submitOptions').click(function (event) {
    console.log('clicked submit options');
    // $('#submitOptions').remove();
    // createPlayersDropDown();
    validateOptions();
})

$('#playerDropdown').change(function (event) {
    console.log('changed dropdown');
    const playerOption = event.target.value;
    optionsSelected.numberOfPlayers = event.target.value;
    const playerEntry = document.getElementById('player-name-entry')
    console.log(optionsSelected.numberOfPlayers)
    console.log(optionsSelected);
    const header = `
        <div>
        <h4 class='d-flex flex-column align-items-center' aria-describedby="playerNameHeader">
        Enter the player names: 
        </h4>
        <small id="playerNameHeader" class="text-muted d-flex flex-column align-items-center">
            Names entered cannot match other players
      </small>
      </div>
    `
    playerEntry.innerHTML = header;
    let playerNumber = parseInt(playerOption);
    const playerTemplate = `
    <div class='justify-content-center row'>
            <p> Player:  <p>
                <input class='col-md names form-control' type="text" placeholder="Name">
    </div> `
    for (let i = 1; i <= playerNumber; i++) {
        playerEntry.innerHTML += playerTemplate;
    }
    const names = document.getElementsByClassName('names');
    for (let i = 0; i < names.length; i++) {
        names[i].id = i;
        console.log(names[i])
    }
})

$('#submitPlayerNumber').click(function (event) {
    console.log('clicked submit player number');
})

function createScorecard() {
    let scorecardDiv = document.getElementById('scorecard')
    console.log(optionsSelected.courseOption);
    courseData(optionsSelected.courseOption);
    for (let i = 0; i <= hole; i++) {
        console.log(hole[i])
    }
}


function validateOptions() {
    const allForms = document.getElementsByClassName('form-control');
    for (let i = 0; i < allForms.length; i++) {
        if (allForms[i].value == '0') {
            allForms[i].classList.add('is-invalid');
        } else {
            allForms[i].classList.remove('is-invalid');
        }
    };
    const names = document.getElementsByClassName('names');
    for (let i = 0; i < names.length; i++) {
        if(names[i].value == '') {
            names[i].classList.add('is-invalid');
        }
        else {
            names[i].classList.remove('is-invalid');
        }
    }
};