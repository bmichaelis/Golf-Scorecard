export function courseData(courseId) {
    const course = []
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const courseData = JSON.parse(xhttp.responseText);
            for (let i = 0; i < courseData.data.holes.length; i++) {
                const hole = {};
                hole.number = courseData.data.holes[i].hole;
                hole.proPar = courseData.data.holes[i].teeBoxes[0].par;
                hole.proYards = courseData.data.holes[i].teeBoxes[0].yards;
                hole.proHcp = courseData.data.holes[i].teeBoxes[0].hcp;
                hole.champPar =  courseData.data.holes[i].teeBoxes[1].par;
                hole.champYards =  courseData.data.holes[i].teeBoxes[1].yards;
                hole.champHcp = courseData.data.holes[i].teeBoxes[1].hcp;
                hole.menPar = courseData.data.holes[i].teeBoxes[2].par;
                hole.menYards = courseData.data.holes[i].teeBoxes[2].yards;
                hole.menHcp = courseData.data.holes[i].teeBoxes[2].hcp;
                hole.womenPar = courseData.data.holes[i].teeBoxes[3].par;
                hole.womenYards = courseData.data.holes[i].teeBoxes[3].yards;
                hole.womenHcp = courseData.data.holes[i].teeBoxes[3].hcp;
                course.push(hole);
            }
            console.log(course)
        }
    };
    xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${courseId}`, true);
    xhttp.send();
}

