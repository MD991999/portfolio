
// video=document.getElementById('video')
// function play(){
//     video.play()
// }
var tabitem = document.querySelector('.tab-item')
var cardinner = document.querySelector('.card-inner')
var cardinner1 = document.querySelector('.card-inner1')
var headingabout = document.querySelector('.heading-about')
var headingabout1 = document.querySelector('.heading-about1')
var activeeducation=document.querySelector('#active-education')
tabitem.addEventListener('click', function () {
        cardinner1.classList.toggle('show')
        cardinner.classList.toggle('hide')
        headingabout.classList.toggle('hide')
        headingabout1.classList.toggle('show')
    
    }
   
)
activeeducation.addEventListener('click',function(){
    window.location ='http://127.0.0.1:5501/index.html#about'
    // cardinner1.classList.toggle('show')
    // cardinner.classList.toggle('hide')
    // headingabout.classList.toggle('hide')
    // headingabout1.classList.toggle('show')
})

function project() {
    window.location = 'project.html'
}
function buttonarrowright() {
    window.location = "project.html"
}
function buttonarrowleft() {
    // cardinner.classList.toggle('show')
    // cardinner1.classList.remove('show')
    // headingabout1.classList.remove('show')
    // headingabout.classList.add('show')
location.reload()
}
function services(){
    window.location = 'services.html'

}
// var menuicon = document.querySelector('#menu-icon')
// var navlist=document.querySelector('.navlist')
// menuicon.addEventListener('click',function(){
//     navlist.classList.toggle('show')
// })
// var imgbox=document.querySelector('.img-box')
// const dummydata=window.innerWidth
//     if( dummydata<992){
// imgbox.style.display="none";
//     }
//     else{
//         imgbox.style.display="block";

//     }

var menuicon=document.querySelector('#menu-icon')
var navlist1=document.querySelector('#navlist-display')
if(window.innerWidth<=576){}
menuicon.addEventListener('click',function(){
navlist1.classList.toggle('show')
navlist1.classList.toggle('navlist2')
console.log('ertyuikl');
})
