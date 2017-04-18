
(function(){
    "use strict";
    let li = document.querySelectorAll('.li');
	let valOfHiddenInput = document.querySelector('.design_hidden_input');
    let slideWrap = document.querySelectorAll('.slider_design');
    let arr = [];
    
        for(let i = 0 ; i < li.length; i++){
		 li[i].addEventListener("click",()=>{
		 		let owlItem = slideWrap[i].querySelectorAll('.owl-item');
             setInterval(()=>{
                var setId = setInterval(()=>{
                    for(let j = 0; j < owlItem.length; j++ ){
                        if(owlItem[j].classList.contains('active')){
                            var h1 = owlItem[j].querySelector('h1').innerHTML;
                            arr.push(h1);
                        }
                    }
                        clearInterval(setId);
                        valOfHiddenInput.value = arr[arr.length-1];
                       
                        arr.splice(0,arr.length);
                  
                },300);
             },900);
		 });
	  }
 
 }());

