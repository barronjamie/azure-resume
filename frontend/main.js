window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://getresumecounterjamie.azurewebsites.net/api/GetResumeCounter?code=V9r8Eutp1cAoD5byWuMbUmcCUmvn7fs9JdHTsB4fCQJRAzFuFCYulw%3D%3D"
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}