const playerEntryContainer = document.getElementById('player-entry');
const playerDropdown = document.getElementById('player-container');
const playerCount = document.getElementById('player-count');


function dropdownCourse() {
    const courseTemplate = `
    <a class="dropdown-item" href="#">${courseName}</a>`
}

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
    <div class='container'>
        <div class='col'>
            <p class='col-sm'> Player: <p>
            <input class='col-sm' type="text" placeholder="Name">
        </div>
    </div> `
    return playerTemplate
}


//fix player template so that it is in one line and centered
//Need to add function that pulls the data selected in the dropdowns
//Also need a function that verifies that all data has been entered:
//All options selected, names entered, no duplicate names
//If duplicate name, module stating names cannot be the same. 
//Data validation? 
//Submit button greyed out until all data entered? 