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
      if (getCoords(opacity_block[i]).top - 600 <= document.body.scrollTop) {
      
        opacity_block[i].classList.add('visible_block');
      }
    });
  };

  for (var i = 0; i < opacity_block.length; i++) {
    _loop(i);
  }
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {
      top: top,
      left: left
    };
  }
})();