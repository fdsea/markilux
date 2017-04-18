
var arrImg = [ 
  "http://kompravda.eu/share/i/12/8345525/wr-720.sh-18.jpg",
  "http://ok-crimea.ru/article/1223/markizy-v-simferopole-crimea.jpg",
  "https://www.technorol.eu/images/markyzy/stobag-sattler/fotogalerie/zimni-zahrady/airomatic-7.jpg",
  "http://novabudova.kiev.ua/wp-content/uploads/2015/11/markizy-1000x600.jpg",
  "https://arcona.com.ua/wp-content/uploads/Markizy-kovshevye-7-1024x646.jpg",
  "http://www.electro-karnizi.ru/images/products/awnings.jpg",
  "http://www.redsonn.ru/images/work/mo-markizi-032017/img_7687sm.jpg"
];

function preloadImages(arr) {
     
  for (let i = 0; i < arr.length; i++) {
    new Image().src = arr[i];
     
  }
}

preloadImages(arrImg);
