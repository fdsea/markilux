 $(function(){

var a = document.querySelectorAll('.menu_item_a');
     for(let i = 0; i < a.length; i++){
			 a[i].addEventListener('click',()=>{
				  var atr = a[i].getAttribute('href').substring(1);
				 console.log(atr);
				 $('html,body').stop().animate({ scrollTop: $("#"+atr).offset().top }, 1500);
           e.preventDefault();
			 });
    
  }

});
