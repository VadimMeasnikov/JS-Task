let topicButtonLight = document.querySelector('.topicButtonLight')
let topicButtonDark = document.querySelector('.topicButtonDark')
let body = document.querySelector('body')
let header = document.querySelector('header')
let nav = document.querySelector('.nav');
let logIn = document.querySelector('.logIn')
let links = document.querySelectorAll('.link');

topicButtonDark.addEventListener('click', () => {
    header.style.background = "black";
    links.forEach((item) => {
      item.style.color = "white";
    })
    body.style.background = 'grey'
})
topicButtonLight.addEventListener('click', () => {
    header.style.background = "grey";
    links.forEach((item) => {
      item.style.color = "black";
    })
    body.style.background = 'white'
})