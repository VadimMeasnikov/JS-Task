let classUl = document.querySelectorAll('li');
classUl.forEach(item => {
    item.className = 'list';
})
let classA = document.querySelectorAll("a")
classA.forEach(item => {
    item.className = 'custom-link';
})
for(let i = 0; i < classUl.length; i += 2){
    classUl[i].classList.add('item')
}