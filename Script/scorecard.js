const test = document.getElementById('testDiv');

function front9Template() {
    let rowDiv = `
    <div class="row">
    `
    let numberedDiv = `
    <div class="col border"> 1 </div>
    <div class="col border"> 2 </div>
    <div class="col border"> 3 </div>
    <div class="col border"> 4 </div>
    <div class="col border"> 5 </div>
    <div class="col border"> 6 </div>
    <div class="col border"> 7 </div>
    <div class="col border"> 8 </div>
    <div class="col border"> 9 </div>
    </div>
    `
    let fullTemplate = `
    ${rowDiv}
    <div class="col border"> Hole </div>
    ${numberedDiv}
    ${rowDiv}
    <div class="col border"> Tee </div>
    ${numberedDiv}
    ${rowDiv}
    <div class="col border"> Handicap </div>
    ${numberedDiv}
    ${rowDiv}
    <div class="col border"> Names </div>
    ${numberedDiv}
    `
    return fullTemplate;
}


test.addEventListener('click', event => {
    test.innerHTML = front9Template();
    console.log('clicked');
})