
 //creating slide down for the navbar link
  $(document).ready(function(){
    $('.arrow-down').on('click',function(e){
        e.preventDefault()
        $(".drop-down-pages-menu-links").slideToggle();
    })
})

//creating slide down for the menu bar
$(document).ready(function(){
    $('.arrow-down-menu-bar').on('click',function(){
        $('.drop-down-pages-menu-1').slideToggle()
    })
})


//creating carousel
const Next=document.querySelector('.right-arrow');
const Previous=document.querySelector('.left-arrow');
const slides=document.querySelectorAll('.slide');

 let counter=1;

 function hidingslides(){
    slides.forEach(function(e){
            e.style.display='none'
        })
 }

Next.addEventListener('click',function(){
    hidingslides()
    document.querySelector(`.slide-${counter}`).style.display='none';
    counter++;
    if(counter===4){counter=1}
    document.querySelector(`.slide-${counter}`).style.display='block';
})

Previous.addEventListener('click',function(){
    hidingslides()
    document.querySelector(`.slide-${counter}`).style.display='none';
     counter--
    if(counter===0){counter=3}
    document.querySelector(`.slide-${counter}`).style.display='block';

})

let slidenumber=0;

function AutoSlideshowing(){
 hidingslides();

slidenumber++;

if(slidenumber>slides.length){slidenumber=1}
slides[slidenumber-1].style.display='block'

setTimeout(AutoSlideshowing,5000)

}

window.addEventListener('load',function(){
    AutoSlideshowing(slidenumber)
 })


//creating scroll menu bar
$(document).ready(function(){
    $('.fa-bars').on('click',function(){
        $('.menu-bar').slideToggle()
        
    })
})

//adding animation to the menu

const breakfastBtn=document.querySelector(".breakfast");
const LunchtBtn=document.querySelector(".lunch");
const DessertBtn=document.querySelector(".dessert");
const breakfastMenu=document.querySelector(".breakfast-menu");
const dinnerMenu=document.querySelector(".dinner-menu");
const dessertMenu=document.querySelector(".dessert-menu");
const dinners=document.querySelectorAll('.dn');
const desserts=document.querySelectorAll('.ds');
const breakfasts=document.querySelectorAll('.bf');
const dn1=document.querySelectorAll('.dn-1')
const ds1=document.querySelectorAll('.ds-1')
const imagesofTheMenu=document.querySelector('.images-of-the-menu');
const restaurantIntro=document.querySelector('.restaurant-introduction');

//adding functonality to breakfast button;

let bfr=true;
let lnc=true;
let dnr=true;





breakfastBtn.addEventListener('click',function(){
    imagesofTheMenu.style.height='115vh';
    
    if(window.innerWidth<770){restaurantIntro.style.marginTop='10em';}
    else{restaurantIntro.style.marginTop='0em'}

   if(bfr){
    dinners.forEach((e)=>{
       e.classList.add('adding-animation-breakfast')
   })
   desserts.forEach((e)=>{
       e.classList.add('adding-animation-breakfast')
   })
   bfr=false;
   lnc=false;
   dnr=false;
   }
   else{
        dn1.forEach((e)=>{
          e.classList.remove('adding-animation-dinner-1')
        })
        desserts.forEach((e)=>{
            e.classList.remove('adding-animation-dessert')
        })
        dinners.forEach((e)=>{
          e.classList.remove('adding-animation-dinner-1')
        })
      
       dinners.forEach((e)=>{
          e.classList.add('adding-animation-breakfast')
        })
       
        breakfasts.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast');
       });

       
       breakfasts.forEach((e)=>{
           e.classList.add('adding-animation-breakfast-1');
       });

       setTimeout(()=>{
        breakfasts.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast-1');
       });

       },1000)
   }
   
})

//adding functionality to Lunch button
LunchtBtn.addEventListener('click',function(){
imagesofTheMenu.style.height='115vh';

if(window.innerWidth<770){restaurantIntro.style.marginTop='10em'}
else{restaurantIntro.style.marginTop='0em'}

if(lnc){
    breakfasts.forEach((e)=>{
    e.classList.add('adding-animation-breakfast')
})

dinners.forEach((e)=>{
    e.classList.add('adding-animation-dinner-1')
})

desserts.forEach((e)=>{
    e.classList.add('adding-animation-breakfast')
})  

bfr=false;
lnc=false;
dnr=false;
}

else{  
       desserts.forEach((e)=>{
            e.classList.remove('adding-animation-dessert')
        })
    
       ds1.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast-1');
       });
    
        breakfasts.forEach((e)=>{
         e.classList.add('adding-animation-breakfast')
        })

        dinners.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast')
        })

        
       dinners.forEach((e)=>{
           e.classList.add('adding-animation-dinner-1');
       });

       dn1.forEach((e)=>{
           e.classList.add('adding-animation-breakfast-1');
       });

       setTimeout(()=>{
        dn1.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast-1');
       });

       },1000)
   }



})

//adding functionality to dessert button
DessertBtn.addEventListener('click',function(){
imagesofTheMenu.style.height='115vh';

if(window.innerWidth<770){restaurantIntro.style.marginTop='10em'}
else{restaurantIntro.style.marginTop='0em'}


if(dnr){
    breakfasts.forEach((e)=>{
    e.classList.add('adding-animation-breakfast')
})

dinners.forEach((e)=>{
    e.classList.add('adding-animation-breakfast')
})

desserts.forEach((e)=>{
    e.classList.add('adding-animation-dessert')
}) ;
bfr=false;
   lnc=false;
   dnr=false;
}

else{  dinners.forEach((e)=>{
           e.classList.remove('adding-animation-dinner-1');
       });
        breakfasts.forEach((e)=>{
         e.classList.add('adding-animation-breakfast')
        })

        dinners.forEach((e)=>{
           e.classList.add('adding-animation-breakfast')
        })
        desserts.forEach((e)=>{
            e.classList.add('adding-animation-dessert')


        })
        ds1.forEach((e)=>{
           e.classList.add('adding-animation-breakfast-1');
       });

       setTimeout(()=>{
        ds1.forEach((e)=>{
           e.classList.remove('adding-animation-breakfast-1');
       });

       },1000)
   }

})


//testimonial carousel

$(document).ready(function () {
$('.testimonial-slides').slick({
    
    prevArrow: $('.testimonial-left-arrow'),
    nextArrow: $('.testimonial-right-arrow'),
    autoplay:true,
    autoplaySpeed:4000,
    infinite: true,

});})

//adding background color to the navbar links when they are clicked on
const navBarlinks=document.querySelectorAll('.link');

for(let i=0;i<navBarlinks.length;i++){
       navBarlinks[i].addEventListener('click',function(e){
           for(let i=0;i<navBarlinks.length;i++){
               navBarlinks[i].classList.remove('home')
           }
           this.classList.add('home');
       
 })}


// adding animation to images of menu and introduction on scroll

const imgsMenu=document.querySelector('.images-of-the-menu');
const intro=document.querySelector('.introduction');
const chefImage=document.querySelector('.chef-image');

window.addEventListener('scroll',()=>{
  let contentPositionFirst=imgsMenu.getBoundingClientRect().top;
  let contenetPositionSecond=intro.getBoundingClientRect().top;
  let contentPostionThrid=intro.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  
  if(contentPositionFirst<screenPosition){
      imgsMenu.classList.add('movingUp-the-images')
  }

  if(contenetPositionSecond<screenPosition){
    intro.classList.add('adding-animation-to-introduction')
  }

  if(contentPostionThrid<screenPosition){
    chefImage.classList.add('adding-animation-to-chef-image')
  }

 
})



//
