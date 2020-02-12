let body = document.querySelector('body')

let emporium = document.getElementsByClassName('emporium')[0]
let brand = document.getElementsByClassName('navbar-brand')[0]
console.log(brand);

brand.style.display = "none"

    
 window.onscroll = function(){
        brand.style.display = "block"
        emporium.style.display = "none"
}


var scrollPos = 0;

window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos)
        console.log('up')   
	else
		console.log('down')
	scrollPos = (document.body.getBoundingClientRect()).top;
  if (window.scrollY == 0){
    console.log('tutu itt van')
    brand.style.display = "none"
    emporium.style.display = "block"
  }
});


   

