		'use strict';

(function () {
	

  var opacity_block = document.querySelectorAll('.opacity_block');

  var _loop = function _loop(i) {
    function chekoutSl(i) {
      opacity_block[i].classList.add('hidden_block');
      if (getCoords(opacity_block[i]).top <= 100) {
        opacity_block[i].classList.add('visible_block');
      }
    }
    chekoutSl(i);
    document.addEventListener('scroll', function () {
      if (getCoords(opacity_block[i]).top - 600 <= document.body.scrollTop || getCoords(opacity_block[i]).top - 600 <= $('html').scrollTop()) {
      console.log();
        opacity_block[i].classList.add('visible_block');
      }
    });
  };

  for (var i = 0; i < opacity_block.length; i++) {
    _loop(i);
  }
	
function getCoords(obj)
{
var curleft = 0;
var curtop = 0;
if (obj.offsetParent)
{
while (1)
{
curleft += obj.offsetLeft;
curtop += obj.offsetTop;
if (!obj.offsetParent)
break;
obj=obj.offsetParent;
}
}
else if (obj.x || obj.y)
{
curleft += obj.x;
curtop += obj.y;
}
return {"left":curleft, "top":curtop};
}
})();