
let buttons = document.querySelectorAll('button');
let info = document.querySelectorAll('.content-block')
// console.log(buttons ,info)
let openTab = (button, classBlock) => {
   buttons.forEach((item) => {
      item.style.background = 'grey';
   })
   button.style.background = 'white';
   info.forEach((item) => {
      if (item.classList.contains(classBlock)){
         item.style.display ='block';
      } else {
         item.style.display = 'none';
      }
   })
}
buttons.forEach((item) => {
   item.addEventListener('click', (event) => {     
      let actButton = event.target;

      // console.log(actButton)
      let classBlock = event.target.id + '-content';
      // console.log(classBlock)
      // let block = document.querySelector(classBlock);
      openTab(actButton, classBlock);
   })
   item.value = ""
})