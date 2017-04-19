

(function () {
    "use strict";

    var li = document.querySelectorAll('.li');
    var valOfHiddenInput = document.querySelector('.design_hidden_input');
    var slideWrap = document.querySelectorAll('.slider_design');
    var arr = [];

    var _loop = function _loop(i) {
        li[i].addEventListener("click", function () {
            var owlItem = slideWrap[i].querySelectorAll('.owl-item');
            setInterval(function () {
                var setId = setInterval(function () {
                    for (var j = 0; j < owlItem.length; j++) {
                        if (owlItem[j].classList.contains('active')) {
                            var h1 = owlItem[j].querySelector('h1').innerHTML;
                            arr.push(h1);
                        }
                    }
                    clearInterval(setId);
                    valOfHiddenInput.value = arr[arr.length - 1];
                    console.log(arr[arr.length - 1]);
                    arr.splice(0, arr.length);
                }, 300);
            }, 900);
        });
    };

    for (var i = 0; i < li.length; i++) {
        _loop(i);
    }
})();

