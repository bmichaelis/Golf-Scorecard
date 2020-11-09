const playerEntryContainer = document.getElementById('player-entry');
const playerDropdown = document.getElementById('player-container');
const playerCount = document.getElementById('player-count');
const golfCourseSelector = document.getElementById('course-options');
const teeTypeSelector = document.getElementById('tee-type');
const holeTotal = document.getElementById('hole-total-selection');
const allForms = document.getElementsByClassName('form-control');
const submitButton = document.getElementById('submit');
const scorecardDiv = document.getElementById('scorecard');
// const names = document.getElementsByClassName('names');


function optionsLogger() {
    golfCourseSelector.addEventListener('change', event => {
        const courseSelected = golfCourseSelector.value;
        // const courseId = courseList.id;
        // console.log(courseId);
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
        for (let i = 0; i < allForms.length; i++) {
            if (allForms[i][0].selected) {
                allForms[i].classList.add('is-invalid');
            } else {
                allForms[i].classList.remove('is-invalid');
            }
        };
    })
}
allFieldsEntered();


function validateNames() {
    console.log(names);
    let namesArray = []
    for(let i = 0; i < names.length; i++) {
        console.log(names[i].value);
        if(names[i].value == names[i+1].value) {
            names[i].classList.add('is-invalid');
        } else {
            names[i].classList.remove('is-invalid');
        }
    }
    console.log(names.length);
}


const xhttp = new XMLHttpRequest();
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
    namesValidation();
});

function namesValidation() {
    const names = document.getElementsByClassName('names');
    for(let i = 0; i < names.length; i++) {
        console.log(names[i].value)
        names[i].addEventListener('onblur', event => {
            console.log('working');
        })
        // if(names[i].value == names[i+1].value) {
        //     names[i].classList.add('is-invalid');
        // } else {
        //     names[i].classList.remove('is-invalid');
        // }
    }
};


function createPlayerEntry() {
    const playerTemplate = `
    <div class='container d-flex justify-content-center'>
        <div class='row'>
            <p class='col-3'> Player: <p>
            <input class='col-md names' type="text" placeholder="Name">
        </div>
    </div> `
    return playerTemplate
}



//submit function
//make API call for ID of course
//save players names that were entered and other selections



//TO DO:
//Need to add function that uses the data in dataLogger to populate 
//scorecard with names, tee type, course info, etc
//Also need a function that verifies that all data has been entered:
//All options selected(done), names entered, no duplicate names
//If duplicate name, module stating names cannot be the same. 
//Templates for front 9 and back 9
//For full 18, have it just populate one below the other. 
