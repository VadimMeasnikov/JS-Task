const row = document.querySelector('.row')
const urlCountry = 'https://restcountries.com/v3.1/name/Spain';

const fetchFunction = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            getCountryInfo(data)
        })
}
fetchFunction(urlCountry)

const fetchNeighbours = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            getCountryInfo(data)
        })
}
//В этом fetch будет url с кодом сосдней страны (borders через forEach)

let getCountryInfo = (data) => {

    let flag = data[0].flags.svg
    let countryName = data[0].name.common
    let region = data[0].region
    let populationFull = data[0].population / 1000000
    let population = populationFull.toFixed(2) + ' mln';
    let language = Object.values(data[0].languages).join();

    let currencyFull = Object.values(data[0].currencies)

    let currency = currencyFull.map(item => item.symbol + ' ' + item.name).join()

    // console.log(flag,countryName,region,population, language, currency)

    let block = createCard(flag, countryName, region, population, language, currency)
    row.innerHTML += block

    let neighbours = data[0].borders
    console.log(neighbours)
    neighbours.forEach(item => {
        fetchNeighbours(`https://restcountries.com/v3.1/alpha/${item}`)
    });
}




let createCard = (flag, countryName, region, population, language, currency) => {
    return `
       <div class="col">
       <div class="card">
       <img src = "${flag}">
       <h2 class="country">${countryName}<h2>
       <p class="region"> ${region}<p>
       <p class = "population">${population}<p>
       <p class = "language">${language}<p>
       <p class = "money"> ${currency} <p>
       </div>
       </div?
       `

}