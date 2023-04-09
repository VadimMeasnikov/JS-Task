const ul = document.querySelector('ul');

let select = document.querySelector('.select')

let foundCountry = (data) => {
    let array = []
    data.forEach(element => {
        // console.log(element.location.country)
        if(element.location.country == select.value){
            // console.log(select.value)
            // console.log(element.company)
            array.concat(element.company)
            element.company.forEach(item => {
                let li = document.createElement('li')
                li.innerText = item

                ul.append(li);
                
            })
        }
    })
    console.log(array)
}

select.addEventListener('change', () => {   
    document.querySelectorAll('li').forEach(item => {
        item.remove();
    })
    fetch('http://api.citybik.es/v2/networks')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        foundCountry(data.networks)
    })
})

