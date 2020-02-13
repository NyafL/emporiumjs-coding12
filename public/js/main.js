let body = document.querySelector('body')

let emporium = document.getElementsByClassName('emporium')[0]
let brand = document.getElementsByClassName('navbar-brand')[0]
console.log(brand);

brand.style.display = "none"

    
//  window.onscroll = function(){
//         brand.style.display = "block"
//         emporium.style.display = "none"
// }


// var scrollPos = 0;

// window.addEventListener('scroll', function(){
//   if ((document.body.getBoundingClientRect()).top > scrollPos)
//         console.log('up')   
// 	else
// 		console.log('down')
// 	scrollPos = (document.body.getBoundingClientRect()).top;
//   if (window.scrollY == 0){
//     console.log('tutu itt van')
//     brand.style.display = "none"
//     emporium.style.display = "block"
//   }
// });


   


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName('connection')[0]

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener('click', () => { 
  modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

//website color change 
let whitebtn = document.getElementById('whitebtn')
let blackbtn = document.getElementById('blackbtn')
let nav = document.getElementsByTagName('nav')[0]
let h1 = document.getElementsByTagName('h1')[0]
h1.style.margin = "0"
//recents products cards
let card1 = document.getElementsByClassName('card')[3]
let card2 = document.getElementsByClassName('card')[4]
let card3 = document.getElementsByClassName('card')[5]
let card4 = document.getElementsByClassName('card')[6]
let card5 = document.getElementsByClassName('card')[7]
let card6 = document.getElementsByClassName('card')[8]
let card7 = document.getElementsByClassName('card')[9]
let card8 = document.getElementsByClassName('card')[10]
let card9 = document.getElementsByClassName('card')[11]

let card10 = document.getElementsByClassName('card')[0]
let card11= document.getElementsByClassName('card')[1]
let card12 = document.getElementsByClassName('card')[2]

let card13 = document.getElementsByClassName('card')[12]
let card14= document.getElementsByClassName('card')[13]
let card15 = document.getElementsByClassName('card')[14]

let section1 = document.getElementsByTagName('section')[0]
let footer = document.getElementsByTagName('footer')[0]



whitebtn.addEventListener('click', () => {
    nav.className = "navbar sticky-top navbar-expand-lg navbar-light bg-white "
    // h1.style.backgroundColor = "white"
    // h1.style.color = "black"
    body.style.backgroundColor = "white"
    body.style.color = "black"
    card1.classList.add('bg-white')  
    //recents products
    card2.classList.add('bg-white')
    card3.classList.add('bg-white')
    card4.classList.add('bg-white')
    card5.classList.add('bg-white')
    card6.classList.add('bg-white')
    card7.classList.add('bg-white')
    card8.classList.add('bg-white')
    card9.classList.add('bg-white')
    card10.classList.add('bg-white')
    card11.classList.add('bg-white')
    card12.classList.add('bg-white')
    card13.classList.add('bg-white')
    card14.classList.add('bg-white')
    card15.classList.add('bg-white')

    section1.classList.add('bg-white')





})

blackbtn.addEventListener('click', () => {
    nav.className = "navbar sticky-top navbar-expand-lg navbar-dark bg-dark "
    // h1.style.backgroundColor = "black"
    // h1.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
    card1.classList.add('bg-dark')  
    card1.classList.remove('bg-white')
    //recents products
    card2.classList.add('bg-dark')
    card2.classList.remove('bg-white')
    card3.classList.add('bg-dark')
    card3.classList.remove('bg-white')
    card4.classList.add('bg-dark')
    card4.classList.remove('bg-white')
    card5.classList.add('bg-dark')
    card5.classList.remove('bg-white')
    card6.classList.add('bg-dark')
    card6.classList.remove('bg-white')
    card7.classList.add('bg-dark')
    card7.classList.remove('bg-white')
    card8.classList.add('bg-dark')
    card8.classList.remove('bg-white')
    card9.classList.add('bg-dark')
    card9.classList.remove('bg-white')
    card10.classList.add('bg-dark')
    card10.classList.remove('bg-white')
    card11.classList.add('bg-dark')
    card11.classList.remove('bg-white')
    card12.classList.add('bg-dark')
    card13.classList.remove('bg-white')
    card13.classList.add('bg-dark')
    card13.classList.remove('bg-white')
    card14.classList.add('bg-dark')
    card14.classList.remove('bg-white')
    card15.classList.add('bg-dark')
    card15.classList.remove('bg-white')

    section1.classList.add('bg-dark')
    section1.classList.remove('bg-white')

})