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
  var i = beginVal;
  var partOfsum = afterVal / 100;
  var stopTimer = setInterval(function() {
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
	
    return false;
}

	
	function scroolStart(){
	   var scroll = $('html').scrollTop();
       var reward = document.querySelector('.reward');
		console.log($('.reward').offset().top);
		 if($('.reward').offset().top/0.7 <= $('html,body').scrollTop() || reward.offsetTop/0.7 <= document.body.scrollTop ){
        metrickCounter();
		document.removeEventListener('scroll', scroolStart);
	   }
}
	
document.addEventListener('scroll', scroolStart);

}());