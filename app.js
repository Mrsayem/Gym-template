var Togglelist= document.querySelector('.toggle');
var Showlist = document.querySelector('.showcase');
Togglelist.addEventListener('click',() =>{
    Showlist.classList.toggle('active');
    Togglelist.classList.toggle('active');
})