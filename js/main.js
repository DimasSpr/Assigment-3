const btn = document.querySelector(".btn");
const inputElement = document.querySelector(".inputElement");

btn.addEventListener("click", getData);

function getData(){
    let country = inputElement.value;
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f18ca1e8c6msh7157ce07ac800edp18a4eajsnaf5fab945cb1',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    })
    
   
        .then((response) => response.json())
        .then((json) => {
            let data = json.response[0];
            document.querySelector(".activeCases").innerHTML = data.cases.active;
            document.querySelector(".newCases").innerHTML = data.cases.new;
            document.querySelector(".recoveredCases").innerHTML = data.cases.recovered;
            console.log(data.cases.recovered);
            document.querySelector(".totalCases").innerHTML = data.cases.total;
            document.querySelector(".totalDeaths").innerHTML = data.deaths.total;
            document.querySelector(".totalTests").innerHTML = data.tests.total;
        })
}
