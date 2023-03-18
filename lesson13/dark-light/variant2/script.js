let topicButton = document.querySelector('.topicButton')
let body = document.querySelector('body')
let header = document.querySelector('header')
let nav = document.querySelector('.nav');
let logIn = document.querySelector('.logIn')
let links = document.querySelectorAll('.link');

topicButton.addEventListener('click', () => {
   topicButton.classList.toggle('topicButtonDark')
   body.classList.toggle('dark')
})
