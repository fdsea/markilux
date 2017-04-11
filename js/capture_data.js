(function(){
	let li = document.querySelectorAll('.li');
	let valOfHiddenInput = document.querySelector('.design_hidden_input');
	for(let i in li){
		 li[i].addEventListener("click",()=>{
		 		let data_li = li[i].getAttribute('data-item');
	               valOfHiddenInput.value = data_li;
			  //alert(valOfHiddenInput.value);  //test capture 
		 });
	  }
}());

