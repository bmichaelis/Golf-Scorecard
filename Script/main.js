import { state } from "./state.js"

const allForms = document.getElementsByClassName('form-control');
const submitButton = document.getElementById('submit');
const scorecardDiv = document.getElementById('scorecard');
const appContainer = document.getElementById('appContainer');
// const names = document.getElementsByClassName('names');


function eventListeners() {
    const golfCourseSelector = document.getElementById('course-options');
    const teeTypeSelector = document.getElementById('tee-type');
    const playerCount = document.getElementById('player-count');
    const holeTotal = document.getElementById('hole-total-selection');
    golfCourseSelector.addEventListener('change', event => {
        state.golfCourse = event.target.value;
        optionsLogger(event.target.value);
        populateForms(event.target.value);
    })
    teeTypeSelector.addEventListener('change', event => {
        state.selectedTeeType = event.target.value;
        optionsLogger(event.target.value)
    })
    holeTotal.addEventListener('change', event => {
        state.holeTotals = event.target.value;
        optionsLogger(event.target.value);
    })
    playerCount.addEventListener('change', event => {
        state.players = event.target.value;
        optionsLogger(event.target.value);
    })
}

function optionsLogger(data) {
    console.log(`selected ${data}`);
    console.log(state);
}

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


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseText);
        const courseList = JSON.parse(xhttp.responseText);
        console.log(courseList);
        state.courses = courseList.courses;
        renderForm('playerTotal', 'player-count', 'number of players');
        renderForm('holeTotal', 'hole-total-selection', 'number of holes');
        renderForm('teeTypes', 'tee-type', 'tee type');
        renderForm('courses', 'course-options', 'course');
        eventListeners()
        addPlayer();
    }
};
xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
xhttp.send();

function populateForms(value) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const course = JSON.parse(xhttp.responseText)
            state.selectedCourse = course;
            console.log(course)
        }
    };
    xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${value}`, true);
    xhttp.send();
};

function renderForm(stateKey, elementId, placeholder) {
    //render forms based off state.courses 
    const courseWrapper = document.createElement('div');
    const courseDiv = `
    <div class="form-group">
    <select class="form-control" id="${elementId}">
    <option>Please select ${placeholder}</option >
    ${renderFormOptions(stateKey)}
    </select >
    </div >
    `
    appContainer.prepend(courseWrapper);
    courseWrapper.innerHTML = courseDiv;
    console.log(courseDiv);
}

function renderFormOptions(stateKey) {
    const options = [];
    state[stateKey].forEach(value => {
        const option = `
    <option value="${value.id}"> ${value.name}</option>
        `
        options.push(option);
    });
    console.log(state[stateKey], options)
    return options.join('');
}

function addPlayer() {
    const playerDropdown = document.getElementById('player-container');
    const playerEntryContainer = document.getElementById('player-entry');
    const playerCount = document.getElementById('player-count');
    playerCount.addEventListener('change', event => {
        let totalPlayers = playerCount.value;
        const header = `< h4 class='d-flex flex-column align-items-center' aria - describedby="playerNameHeader" >
    Enter the player names: 
    </h4 >
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
}

function namesValidation() {
    const names = document.getElementsByClassName('names');
    for (let i = 0; i < names.length; i++) {
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



function validateNames() {
    console.log(names);
    let namesArray = []
    for (let i = 0; i < names.length; i++) {
        console.log(names[i].value);
        if (names[i].value == names[i + 1].value) {
            names[i].classList.add('is-invalid');
        } else {
            names[i].classList.remove('is-invalid');
        }
    }
    console.log(names.length);
}


function createPlayerEntry() {
    const playerTemplate = `
    < div class='container d-flex justify-content-center' >
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
