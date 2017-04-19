
(function(){
var owl =  $('.slider_1'),
	hiddenInput = document.querySelector('.design_hidden_input');
owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var content = $(property.target).find(".owl-item").eq(current).find("h1").text();
    hiddenInput.value = content;
	console.log(hiddenInput.value); // удалить!!!
});
}());