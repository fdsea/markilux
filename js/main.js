var col_0 =[
    "/images/awards/award-1.jpg",
    "/images/awards/award-1.jpg",
    "/images/awards/award-1.jpg"
];
var col_1 =[
    "/images/awards/award-2.jpg",
    "/images/awards/award-2.jpg",
    "/images/awards/award-2.jpg"
];
var col_2 =[
    "/images/awards/award-3.jpg",
    "/images/awards/award-3.jpg",
    "/images/awards/award-3.jpg"
];
var col_3 =[
    "/images/awards/award-4.jpg",
    "/images/awards/award-4.jpg",
    "/images/awards/award-4.jpg"
];

function addContent(arr){
    var owlCar = document.querySelector('.owl-carousel');

for(let i = 0; i < arr.length; i++){
    var elem = document.createElement('div');
        elem.innerHTML='<img src='+arr[i]+' alt="">';
        owlCar.appendChild(elem);
  }
}

function removeContent(arr){
     var owlCar = document.querySelector('.owl-carousel');

for(let i = 0; i < arr.length; i++){
    var elem = document.createElement('div');
        elem.innerHTML='<img src='+arr[i]+' alt="">';
        owlCar.appendChild(elem);
  }
}

addContent(col_3);

function toggleAllBlock(){
    var li = document.querySelectorAll('.li');
    
    
    
   for(let i = 0;i<li.length;i++){
     li[i].addEventListener('click',()=>{
       var index = Array.prototype.indexOf.call(li, this);
         console.log(index);
    });
  }
}
toggleAllBlock();








$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})