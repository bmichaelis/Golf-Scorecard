//Questions: 
//**With bootstrap dropdown menus, how do I make it so it adds 
//the class 'active' to the dropdown item. 
//**Is the bootstrap dropdown or the html select option 
//going to be easier to use for this project? 
//**How do I get the course info to pull from the API? 


const zipCode = document.getElementById('zip-entry');
const professional = document.getElementById('professional');
const moderate = document.getElementById('moderate');
const amateur = document.getElementById('amateur');
const full18 = document.getElementById('full-18');
const front9 = document.getElementById('front-9');
const back9 = document.getElementById('back-9');
const singlePlayer = document.getElementById('single-player');
const twoPlayers = document.getElementById('two-players');
const threePlayers = document.getElementById('three-players');
const fourPlayers = document.getElementById('four-players');
const playerEntryContainer = document.getElementById('player-entry');
const playerDropdown = document.getElementById('player-dropdown');

let request = new XMLHttpRequest();
request.open('GET', 'https://golf-courses-api.herokuapp.com/courses', true);
request.responseType = 'text';

request.send();
console.log(courses);

function playerDropMenu() {
    playerDropdown.addEventListener('click');
    const header = `<h4>Enter the player names: </h4>`;
    if(click === singlePlayer) {
        playerDropdown.classList('active');
        playerEntryContainer.innerHTML(header + createPlayerEntry());
        console.log("singleplayer clicked");
    }
}

function createPlayerEntry() {
    const playerTemplate = `
<div>
    <div>
        Player:
    </div>
    <div>
        <input type="text" placeholder="Name">
    </div>
</div> `
}