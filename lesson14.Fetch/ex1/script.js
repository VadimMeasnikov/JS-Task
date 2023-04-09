const row = document.querySelector('.row')

fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        getCountryInfo(data)
    });

let getCountryInfo = (data) =>{
    for (let i = 0; i < data.length; i += 4){
        let flag = data[i].flags.svg
        let countryName = data[i].name.common
        let region = data[i].region
        let populationFull = data[i].population / 1000000
        let population = populationFull.toFixed(2) + ' mln';
        let language = Object.values(data[i].languages).join();

        let currencyFull = Object.values(data[i].currencies)

        let currency = currencyFull.map(item => item.symbol + ' ' + item.name).join()

        // console.log(flag,countryName,region,population, language, currency)
        
        let block = createCard(flag,countryName,region,population,language,currency)
        row.innerHTML += block
    }
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