(function(){

function metrickCounter(){
  var p1 = document.querySelector('.counter-1'),
      p2 = document.querySelector('.counter-2'),
      p3 = document.querySelector('.counter-3'),
      p4 = document.querySelector('.counter-4'),
      p5 = document.querySelector('.counter-5'),
      countTime = 10;
    

   
function counter(beginVal,afterVal,time,innerElem,pick){
  if(pick === undefined){
    pick = '';
  }
  let i = beginVal;
  let partOfsum = afterVal / 100;
  var stopTimer = setInterval(()=>{
    if(i >= afterVal){
    clearInterval(stopTimer);
     i = afterVal;
    innerElem.innerHTML = Math.floor(i)+ pick;
    }else{
    i += partOfsum;
    innerElem.innerHTML = Math.floor(i)+ pick;
    }
  },time);
  
}

counter(0, 45, countTime,p1);
counter(0, 45, countTime,p2);
counter(0, 250,countTime,p3);
counter(0, 80,countTime,p4);
counter(0, 1000000,countTime,p5);
    
}

document.addEventListener('scroll',()=>{
    let scroll = document.body.scrollTop;
    let reward = document.querySelector('.reward');
    if(reward.offsetTop/2.2 <= document.body.scrollTop && document.body.scrollTop<400 ){
        metrickCounter();
 }
   
});

}());
        
