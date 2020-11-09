const test = document.getElementById('testDiv');

function front9Template() {
    let tableRow = `
    <tr>
    `

    let tableData = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    `
    let fullTemplate = `
    <table class="table table-striped table-bordered table-responsive">
    <tbody>
    ${tableRow}
    <th scope="row">Hole</th>
    ${tableData}
    ${tableRow}
    <th scope="row">Tee</th>
    ${tableData}
    ${tableRow}
    <th scope="row">Handicap</th>
    ${tableData}
    ${tableRow}
    <th scope="row">Names</th>
    ${tableData}
    </tbody>
    </table>
    `
    return fullTemplate;
}

test.addEventListener('click', event => {
    test.innerHTML = front9Template();
    console.log('clicked');
})