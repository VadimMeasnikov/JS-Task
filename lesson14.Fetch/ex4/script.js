const videoBlock = document.querySelector('.video-block')
const form = document.querySelector('.found-block')
const main = document.querySelector('.main')
const nameVideo = document.querySelector('.name')
const searchButton = document.querySelector('.search');
const rec = document.querySelector('.recomendation')

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${nameVideo.value}&type=video`

    nameVideo.value = "";
    // console.log(url)

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            idFind(data);
            recCreate(data)
        })



})

let idFind = (data) => {
    let id = data.items[0].id.videoId
    console.log(id)
    videoCreate(id)
}
let videoCreate = (id) => {
    videoBlock.innerHTML = ""
    let video = document.createElement('iframe')
    video.className = 'video'
    video.src = `https://www.youtube.com/embed/${id}`;
    console.log(video)
    videoBlock.appendChild(video)
}
let recIdFound = (data) => {
    for (let item = 0; item < 5; item++) {
        let idRec = data.items[item].id.videoId
        console.log(idRec);
    }
}

let recCreate = (data) => {
    rec.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        let card = document.createElement('div')
        card.className = 'recBox'
        let img = document.createElement('img')
        img.src = data.items[i].snippet.thumbnails.default.url
        rec.appendChild(card)
        card.appendChild(img)
    }
    let imgs = document.querySelectorAll('.recBox img')
    console.log(imgs)
    rec.addEventListener('click', (event) => {
        console.log(event.target)
        let array = event.target.src.split('/')
        console.log(array)
        let id = array[array.length - 2];
        console.log(id)
        videoCreate(id)
    })
}