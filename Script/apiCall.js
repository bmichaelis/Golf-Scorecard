export async function getCourseData(courseId) {
    const apiCall = await fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`)   
    return await apiCall.json();
}

